# Proyecto finanzas Holcim Ecuador

Proyecto integrador de análisis económico, financiero e ingeniería económica para evaluar una inversión fotovoltaica con almacenamiento en la planta de molienda de Latacunga de Holcim Ecuador.

## Decisión evaluada
¿Es económica y financieramente viable que Holcim Ecuador invierta en un sistema solar fotovoltaico de 5 MWp con batería de 4 MWh, financiado 70% con deuda de largo plazo y 30% con patrimonio, para reducir costos energéticos y riesgo de interrupciones operativas?

## Resultados base
- VAN: USD 1,022,527
- TIR: 13.29%
- WACC: 10.50%
- Beneficio/costo: 1.168
- Payback simple: 6.38 años
- Payback descontado: 11.68 años
- Recomendación: aceptar condicionadamente.

## Instalación local del dashboard
```bash
cd src/dashboard
npm install
npm run dev
```
Abrir http://localhost:3000

## Reproducibilidad
Los datos están en `data/raw` y `data/processed`. Los cálculos principales están documentados en `src/analysis/calculos.py` y en el Excel `Modelo_Financiero_Holcim.xlsx`.

## Fuentes
- Holcim Ecuador, reportes financieros 2023, 2024 y 2025.
- Banco Central del Ecuador, tasas de interés activas efectivas.
- Supuestos académicos identificados para CAPEX, producción solar y almacenamiento.
