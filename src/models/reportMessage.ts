export class report {
  id: number
  message: string
  type: reportTypeEnums
  constructor(message: string, type: reportTypeEnums, id: number = 0) {
    this.message = message
    this.type = type
    this.id = id
  }
}
export enum reportTypeEnums {
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
  SUCCESS = 'success',
}
