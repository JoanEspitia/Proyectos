  import michi from "./assets/michi.png";

function Tarjeta(){
    const nombre = "Ana Perez";
    const profesion = "Desarrolladora Web";
    const mensaje = "¡Hola, bienvenidos a mi tarjeta de presentación!";
    const contacto = "Correo electrónico:"
    const correo = 'prueba@ejemplo.com';
  

    return(
        <><div style={{ border: '1px solid #acc', padding: '20px', width: '300px', textAlign: 'center', borderRadius: '10px' }}>
            <h2>{nombre}</h2>
            <h4>{profesion}</h4>
            <p>{mensaje}</p>
        </div>
        
        <div style={{ border: '1px solid #acc', padding: '20px', width: '300px', textAlign: 'center', borderRadius: '10px' }}>
                <h2>Contactame :D</h2>
                <h4>{contacto}</h4>
                <p>{correo}</p>
            </div>
            
            <div style={{ textAlign: 'right', marginTop: '20px' }}>
                <img src={michi} alt="Michi" style={{  }} />
            </div>
            </>
            );

}
export default Tarjeta;