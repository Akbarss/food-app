import { inject, injectable } from "inversify";
import { IDatabaseService } from "../../core/interface/IDatabase.service";
import { TYPES } from "../../core/type.core";
import { CartItem } from "../../modules/cart/entity/cart-item.entity";
import { Cart } from "../../modules/cart/entity/cart.entity";
import { InternalServerErrorException, NotFoundException } from "../errors/all.exception";
import { ICartSharedRepo } from "../interfaces/ICartShared.repository";

@injectable()
export class CartSharedRepo implements ICartSharedRepo {
    constructor(
        @inject(TYPES.IDatabaseService) private readonly database: IDatabaseService
    ) { }

    async cartInfo(uuid: string, userUuid: string): Promise<Cart> {
        try {
            const repo = await this.database.getRepository(Cart);
            // Need to add Restaurent verification status

            const cart: Cart = await repo.createQueryBuilder("cart")
                .innerJoinAndSelect("cart.user", "user")
                .innerJoinAndSelect("cart.restaurent", "restaurent")
                .where("cart.uuid = :uuid", { uuid: uuid })
                .andWhere("cart.cart_status = :cartStatus", { cartStatus: 'saved' })
                .andWhere("user.uuid = :userUuid", { userUuid: userUuid })
                .getOne();

            if (cart && Object.keys(cart).length) {
                return cart as Cart;
            }
            throw new NotFoundException('Cart not found');
        } catch (error: any) {
            if (error instanceof NotFoundException) throw new NotFoundException(`${error.message}`);
            throw new InternalServerErrorException(`${error.message}`);
        }
    }

    async cartItemInfo(cartUuid: string, itemUuid: string): Promise<CartItem> {
        try {
            const repo = await this.database.getRepository(CartItem);
            const cartItem: CartItem = await repo.createQueryBuilder("cart_item")
                .innerJoinAndSelect("cart_item.cart", "cart")
                .innerJoinAndSelect("cart_item.item", "item")
                .where("cart.uuid = :uuid", { uuid: cartUuid })
                .andWhere("item.uuid = :itemUuid", { itemUuid: itemUuid })
                .getOne();

            return cartItem as CartItem;
        } catch (error: any) {
            if (error instanceof NotFoundException) throw new NotFoundException(`${error.message}`);
            throw new InternalServerErrorException(`${error.message}`);
        }
    }

    async cartItemsInfo(cartId: number): Promise<CartItem[]> {
        try {
            const repo = await this.database.getRepository(CartItem);
            const cartItem: CartItem[] = await repo.createQueryBuilder("cart_item")
                .innerJoinAndSelect("cart_item.cart", "cart")
                .innerJoinAndSelect("cart_item.item", "item")
                .where("cart.id = :id", { id: cartId })
                .getMany();

            if (cartItem && Object.keys(cartItem).length) {
                return cartItem as CartItem[];
            }
            throw new NotFoundException('Cart not found');
        } catch (error: any) {
            if (error instanceof NotFoundException) throw new NotFoundException('Cart not found');
            throw new InternalServerErrorException(`${error.message}`);
        }
    }
}