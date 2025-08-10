import React, { useState, useEffect, useMemo } from "react";

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [duracion, setDuracion] = useState("");
  const [seleccionadas, setSeleccionadas] = useState([]);

  // calcular el tiempo total usando useMemo
  const calcularTiempoTotal = useMemo(() => {
    console.log("calculando tiempo total...");
    return tareas.reduce((total, tarea) => total + tarea.duracion, 0);
  }, [tareas]);

  // actualizar el título del documento cuando cambia el total
  useEffect(() => {
    document.title = `Total: ${calcularTiempoTotal} minutos`;
  }, [calcularTiempoTotal]);

  // función para agregar una nueva tarea
  const agregarTarea = () => {
    if (nuevaTarea && duracion) {
      const nuevaTareaObj = {
        nombre: nuevaTarea,
        duracion: parseInt(duracion)
      };
      setTareas([...tareas, nuevaTareaObj]);
      setNuevaTarea("");
      setDuracion("");
    }
  };

  // funcion para manejo de checkbox
  const manejarSeleccion = (index) => {
    if (seleccionadas.includes(index)){
      setSeleccionadas(seleccionadas.filter(i => i !== index));
    }
    else {
      setSeleccionadas([...seleccionadas, index]);
    }
  }

  // funcion para eliminar tareas seleccionadas
  const eliminarTareasSeleccionadas = () => {
    setTareas(tareas.filter((_, index) => !seleccionadas.includes(index)));
    setSeleccionadas([]);
  }
  // función para eliminar tareas seleccionadas
  const eliminarSeleccionadas = () => {
    setTareas(tareas.filter((_, i) => !seleccionadas.includes(i)));
    setSeleccionadas([]);
  };

  //funcion para eliminar una tarea individual (opcional, puedes quitar si no la usas)
  const eliminarTarea = (index) => {
    const nuevaTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevaTareas);
    setSeleccionadas(seleccionadas.filter(i => i !== index));
}

return (
  <div>
    <h1>Contador de Tareas</h1>
      <div>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nombre de la tarea"
        />
        <input
          type="number"
          value={duracion}
          onChange={(e) => setDuracion(e.target.value)}
          placeholder="Duración en minutos"
        />
        <button onClick={agregarTarea}>Agregar tarea</button>
      </div>

      <h2>Tareas</h2>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={seleccionadas.includes(index)}
              onChange={() => manejarSeleccion(index)}
            />
            {tarea.nombre}; {tarea.duracion} minutos
          </li>
        ))}
      </ul>
        
      <button onClick={eliminarSeleccionadas} disabled={seleccionadas.length === 0}>
        Eliminar tareas seleccionadas
      </button>
      <h3>Total de Tiempo: {calcularTiempoTotal} minutos</h3>
    </div>
  );
}

export default App;
