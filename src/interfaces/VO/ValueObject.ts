import { AbstractValueObject } from "./AbstructValueObject";

interface ValueObjectProps {
  [index: string]: any;
}
  
export abstract class ValueObject<T extends ValueObjectProps> extends AbstractValueObject<T> {}