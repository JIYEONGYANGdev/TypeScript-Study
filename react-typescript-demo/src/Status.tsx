type StatusProps = {
  status: 'loading' | 'success' | 'error'
}

export const Status = (props: StatusProps) => {
  let message
  if (props.status === 'loading') {
    message = 'Loading'
  } else if (props.status === 'success') {
    message = 'Data Fetched Successfully!'
  } else if (props.status === 'error') {
    message = 'Failed:( Error fetching data.'
  }

  return (
    <div>
      <h2>Status -</h2>
      <p>{message}</p>
    </div>
  )
}