'use client';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const kpis = [
  { label: 'VAN base', value: 'USD 1.02 M' },
  { label: 'TIR', value: '13.29%' },
  { label: 'WACC', value: '10.50%' },
  { label: 'B/C', value: '1.168' },
];
const escenarios = [
  { name: 'Optimista', VAN: 3.49, TIR: 18.55 },
  { name: 'Base', VAN: 1.02, TIR: 13.29 },
  { name: 'Pesimista', VAN: -1.98, TIR: 6.23 },
];
const flujo = [{'Año': 0, 'FCF': -6.08}, {'Año': 1, 'FCF': 0.91}, {'Año': 2, 'FCF': 0.93}, {'Año': 3, 'FCF': 0.94}, {'Año': 4, 'FCF': 0.96}, {'Año': 5, 'FCF': 0.97}, {'Año': 6, 'FCF': 0.99}, {'Año': 7, 'FCF': 1.0}, {'Año': 8, 'FCF': 1.02}, {'Año': 9, 'FCF': 0.24}, {'Año': 10, 'FCF': 1.05}, {'Año': 11, 'FCF': 1.07}, {'Año': 12, 'FCF': 1.09}, {'Año': 13, 'FCF': 1.1}, {'Año': 14, 'FCF': 1.12}, {'Año': 15, 'FCF': 1.52}];
const riesgos = [{'Riesgo': 'CAPEX superior a la estimación', 'Nivel': 12}, {'Riesgo': 'Menor generación solar', 'Nivel': 12}, {'Riesgo': 'Autoconsumo inferior al 95%', 'Nivel': 8}, {'Riesgo': 'Ahorro por apagones sobreestimado', 'Nivel': 20}, {'Riesgo': 'Tasa de crédito mayor', 'Nivel': 9}, {'Riesgo': 'Reposición de batería más costosa', 'Nivel': 9}, {'Riesgo': 'Cambios regulatorios eléctricos', 'Nivel': 8}, {'Riesgo': 'Retrasos de permisos/interconexión', 'Nivel': 6}];

export default function Page() {
  return <main>
    <section className="hero">
      <h1>Holcim Ecuador: inversión solar + almacenamiento</h1>
      <p>Evaluación económica, financiera y de ingeniería económica para una planta fotovoltaica de 5 MWp con batería de 4 MWh en Latacunga.</p>
      <span className="badge">Recomendación: aceptar condicionadamente</span>
    </section>

    <section className="grid kpis">
      {kpis.map(k => <div className="card" key={k.label}><div className="label">{k.label}</div><div className="kpi">{k.value}</div></div>)}
    </section>

    <section className="grid two">
      <div className="card"><h2>VAN por escenario</h2><ResponsiveContainer width="100%" height={290}><BarChart data={escenarios}><CartesianGrid strokeDasharray="3 3"/><XAxis dataKey="name"/><YAxis/><Tooltip/><Bar dataKey="VAN" /></BarChart></ResponsiveContainer></div>
      <div className="card"><h2>Flujo de caja libre</h2><ResponsiveContainer width="100%" height={290}><LineChart data={flujo}><CartesianGrid strokeDasharray="3 3"/><XAxis dataKey="Año"/><YAxis/><Tooltip/><Line type="monotone" dataKey="FCF" strokeWidth={3} /></LineChart></ResponsiveContainer></div>
    </section>

    <section className="grid two">
      <div className="card"><h2>Riesgos principales</h2><ResponsiveContainer width="100%" height={310}><BarChart data={riesgos} layout="vertical" margin={{left: 120}}><XAxis type="number"/><YAxis dataKey="Riesgo" type="category" width={170}/><Tooltip/><Bar dataKey="Nivel" /></BarChart></ResponsiveContainer></div>
      <div className="card"><h2>Interpretación ejecutiva</h2><p>El proyecto crea valor en el escenario base porque la TIR supera el WACC y el VAN es positivo. La decisión no debe ejecutarse sin cotización EPC, estudio técnico de recurso solar y auditoría del costo real de interrupciones.</p><table><tbody><tr><th>Payback simple</th><td>6.38 años</td></tr><tr><th>Payback descontado</th><td>11.68 años</td></tr><tr><th>Estructura financiera</th><td>70% deuda / 30% patrimonio</td></tr><tr><th>Mayor riesgo</th><td>Ahorro por continuidad sobreestimado</td></tr></tbody></table></div>
    </section>
    <p className="footer">Fuentes: reportes financieros Holcim Ecuador 2023-2025, BCE y supuestos académicos identificados. Fecha de actualización: julio 2026.</p>
  </main>;
}
