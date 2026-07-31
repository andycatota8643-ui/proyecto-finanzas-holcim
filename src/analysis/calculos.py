import json
import pandas as pd

DATA_DIR = '../../data/processed'

def npv(rate, cashflows):
    return sum(cf / ((1 + rate) ** i) for i, cf in enumerate(cashflows))

def irr_bisection(cashflows, lo=-0.90, hi=1.00, iterations=200):
    for _ in range(iterations):
        mid = (lo + hi) / 2
        if npv(mid, cashflows) > 0:
            lo = mid
        else:
            hi = mid
    return (lo + hi) / 2

def main():
    flows = pd.read_csv(f"{DATA_DIR}/flujo_proyecto_base.csv")
    assumptions = json.load(open(f"{DATA_DIR}/supuestos_proyecto.json", encoding='utf-8'))
    cashflows = flows['FCF'].to_list()
    van = npv(assumptions['wacc'], cashflows)
    tir = irr_bisection(cashflows)
    benefits = flows.loc[flows['VP'] > 0, 'VP'].sum()
    costs = abs(flows.loc[flows['VP'] < 0, 'VP'].sum())
    bc = benefits / costs
    print('VAN:', round(van, 2))
    print('TIR:', round(tir, 6))
    print('B/C:', round(bc, 4))

if __name__ == '__main__':
    main()
