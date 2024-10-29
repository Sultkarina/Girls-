export interface Card {
    image: string;
    name: string;
    age: number;
    bust: number;
    weight: number;
    height: number;
    city: string;
    rating: number;
    verified: boolean;
    description: string;
    pricePerHour: number;
    pricePerNight: number;
    priceTwoHours: number;
    priceExpress: number;
  }
  
  export interface Filter {
    label: string;
    type: string;
    iconBefore?: string;
    iconAfter?: string;
  }
  