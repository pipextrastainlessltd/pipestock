export const routes = [
  { path: '/stock-304l-welded', name: '304L Welded A312', component: Stock304LWelded },
  { path: '/stock-304l-a358', name: '304L A358 Welded', component: Stock304LA358Welded },
  { path: '/stock-316l-welded', name: '316L Welded A312', component: Stock316LWelded },
  { path: '/stock-316l-a358', name: '316L A358 Welded', component: Stock316LA358Welded },
  { path: '/stock-304l-seamless-eu', name: '304L Seamless EU', component: Stock304LSeamlessEU },
  { path: '/stock-304l-seamless-fe', name: '304L Seamless Far East', component: Stock304LSeamlessFarEast },
  { path: '/stock-316l-seamless-eu', name: '316L Seamless EU', component: Stock316LSeamlessEU },
  { path: '/stock-316l-seamless-fe', name: '316L Seamless Far East', component: Stock316LSeamlessFarEast },
  { path: '/stock-end-caps', name: 'End Caps', component: StockEndCaps },
];

export { default as Valuation } from './views/Valuation';
