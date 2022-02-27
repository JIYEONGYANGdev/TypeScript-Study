import {NameProps} from './Person.types'
type PersonListProps = {
  namesList: NameProps[],
}
export const PersonList = (props: PersonListProps) => {
  return (
    <div className="personList">
      {props.namesList.map(name => {
        return(
          <p key={name.first+name.last}>{name.first} {name.last}</p>
        )
      })}
    </div>
  )
}