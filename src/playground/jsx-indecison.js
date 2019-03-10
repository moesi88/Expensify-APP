console.log('App.js is running!')

// JSX - JavaScript XML

const app = {
  title: 'indecision app',
  subTitle: 'put your life in the hands of computers',
  options: []
}

const onFormSubmit = e => {
  e.preventDefault()
  const option = e.target.elements.option.value
  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
    renderAddOption()
  }
}
const removeAll = e => {
  app.options = []
  renderAddOption()
}
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length)
  const option = app.options[randomNum]
  alert(option)
}
const appRoot = document.getElementById('app')
const renderAddOption = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{app.options.length > 0 ? 'here are your options ' : 'no options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What i have to do{' '}
      </button>
      <button onClick={removeAll}>remove All</button>
      <ol>
        {app.options.map(option => {
          return <li key={option}>Option is : {option}</li>
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />
        <button>add option</button>
      </form>
    </div>
  )
  ReactDOM.render(template, appRoot)
}

renderAddOption()
