type GreetProps = {
  name: string,
  todoUnchecked: number,
  isLoggedIn: boolean,
}

export const Greet  = (props: GreetProps) => {
  return (
    <div className="greet">
      {props.isLoggedIn ? (
        <div>
          <h2>Hi {props.name} !</h2>
          <h3>You have {props.todoUnchecked} tasks that had to be done</h3>
          </div>
      ) : (
        <h2>Welcome Guest!</h2>
      )}
    </div>
  )
}