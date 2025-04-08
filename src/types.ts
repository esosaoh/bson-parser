export type BsonValue = 
  | null
  | boolean
  | number
  | string
  | Date
  | Buffer
  | BsonObject
  | BsonArray
  | { $oid: string }
  | { $binary: string, $type: string }
  | { $date: string }
  | { $regex: string, $options: string }
  | { $ref: string, $id: string }
  | { $undefined: true }
  | { $minKey: true }
  | { $maxKey: true };

export interface BsonObject {
  [key: string]: BsonValue;
}

export interface BsonArray extends Array<BsonValue> {}

export enum BsonTypes {
  EOO = 0x00,
  FLOAT64 = 0x01,
  STRING = 0x02,
  DOCUMENT = 0x03,
  ARRAY = 0x04,
  BINARY = 0x05,
  UNDEFINED = 0x06,
  OBJECT_ID = 0x07,
  BOOLEAN = 0x08,
  DATE = 0x09,
  NULL = 0x0A,
  REGEX = 0x0B,
  DBREF = 0x0C,
  INT32 = 0x10,
  TIMESTAMP = 0x11,
  INT64 = 0x12,
  MIN_KEY = 0xFF,
  MAX_KEY = 0xFE
}