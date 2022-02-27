import { PersonProps } from "./Person.types"

export const Person = (props: PersonProps) => {
  return (
    <h3>{props.names.first} {props.names.last}</h3>
  )
}