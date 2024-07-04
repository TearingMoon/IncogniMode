// Objective: Define the targetModel class to be used
export class targetModel {
  name: string
  url: string
  id: number
  constructor(name: string, url: string, id: number = 0) {
    this.id = id
    this.name = name
    this.url = url
  }
}
