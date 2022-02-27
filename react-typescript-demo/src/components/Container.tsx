type ContainerProps = {
  styles: React.CSSProperties
}

export const Container = (props: ContainerProps) => {
  return (
    // <div style={{border: '1px dashed black', padding: '1rem'}}>
    <div style={props.styles}>
      Text content goes here
    </div>
  )
} 