import nwlUnitIcon from '../assets/nlw-unite-icon.svg'

export function Header() {  
  return (
    <div>
      <img src={nwlUnitIcon} alt="brackets-icon" />
      <nav>
        <a href="">Eventos</a>
        <a href="">Participantes</a>
      </nav>
    </div>
  )
}
