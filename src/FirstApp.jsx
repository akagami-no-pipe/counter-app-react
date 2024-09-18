import PropTypes from 'prop-types';


export const FirstApp = ({title = 'Sin titulo', subtitle = 'Sin subtitulo', name = 'Este es un nombre'}) => {
  // if(!title) throw new Error('El titulo es obligatorio');
  return (
    <>
      <h1 data-testid='test-title'> {title} </h1>
      <h2>{subtitle}</h2>
      <h2>{subtitle}</h2>
      <p>{name}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}