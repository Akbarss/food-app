export enum UserRole {
    NONE = 'none',
    OWNER = 'owner',
    EMPLOYEE = 'employee',
    SUPERADMIN = 'superadmin'
}

export enum UserType {
    VISITOR = 'visitor',
    RESTAURANT_USER = 'restaurent-user',
    ADMIN = 'admin'
}

export enum CurrentStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    NOT_VERIFIED = 'not-verified',
    VERIFIED = 'verified'
}

export enum ItemStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    OBSOLETE = 'obsolete',
    EXPERIMENTAL = 'experimental',
    WAITING = 'waiting',
    DELETED = 'deleted'
}

export enum ItemType {
    FOOD = 'food',
    DRINK = 'drink',
    ALCOHOL = 'alcohol',
    VICTUALS = 'Victuals'
}

export enum MealState {
    HOT = 'hot',
    COLD = 'cold',
    NORMAL = 'normal'
}

export enum MealFlavor {
    SWEET = 'sweet',
    SPICY = 'spicy',
    SALTY = 'salty',
    SOUR = 'sour',
    BITTER = 'bitter',
    SAVORY = 'savory',
}

export enum MealType {
    DAILYFOOD = 'daily food',
    FASTFOOD = 'fast food',
    SNACKS = 'snacks',
    BURGERS = 'burgers',
    MEAT = 'meat',
    FISH = 'fish',
    BEVERAGE = 'beverage',
    DESSERT = 'dessert',
    KEBAB = 'kebab',
    ALCOHOL = 'alcohol'
}

export enum HttpStatusCode {
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    FORBIDDEN = 403,
    UNAUTHORIZED = 401,
    METHOD_NOT_ALLOWED = 405,
    REQUEST_TIMEOUT = 408,
    CONFLICT = 409,
    INTERNAL_SERVER = 500,
}