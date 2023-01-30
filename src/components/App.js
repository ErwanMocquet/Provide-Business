import { Routes, Route } from 'react-router-dom';
import '../css/App.css';
import '../css/Nav.css'
import Forside from '../pages/Forside';
import Omos from '../pages/Omos';
import PBModellen from '../pages/PBModellen';
import Salgsteam from '../pages/Salgsteam';
import Ledelsesteam from '../pages/Ledelsesteam';
import Karriere from '../pages/Karriere';
import PBAcademy from '../pages/PBAcademy'
import PBPowerAcademy from '../pages/PBPowerAcademy'
import Videreuddannelse from '../pages/Videreuddannelse'
import VoresServices from '../pages/VoresServices'
import Telemarketing from '../pages/Telemarketing'
import Mødebooking from '../pages/Mødebooking'
import Leadgenerering from '../pages/Leadgenerering'
import Seminar from '../pages/Seminar'
import Kampagnerådgivning from '../pages/Kampagnerådgivning'
import Markedsanalyse from '../pages/Markedsanalyse'
import KoKAnalyser from '../pages/KoKAnalyser'
import Kundetilfredshed from '../pages/Kundetilfreshed'
import Behovsanalyse from '../pages/Behovsanalyse'
import Konkurrentanalyse from '../pages/Konkurrentanalyse'
import Forbrugeranalyse from '../pages/Forbrugeranalyse'
import Analyseegen from '../pages/AnalyseEgen'
import SWOT from '../pages/SWOT'
import PEST from '../pages/PEST'
import DISC from '../pages/DISC'
import Arbejdsforhold from '../pages/Arbejdsforhold';
import VoresKompetencer from '../pages/VoresKompetencer'
import EmnerSegmentering from '../pages/EmnerSegmentering'
import KonventerMøder from '../pages/KonventerMøder'
import Kvalificering from '../pages/Kvalificering'
import VoresCases from '../pages/VoresCases'
import Nyheder from '../pages/Nyheder'
import Kontakt from '../pages/Kontakt'
import Layout from './Layout';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Forside />} />
            <Route path="Omos" element={<Omos />} />
            <Route path="pb-modellen" element={<PBModellen />} />
            <Route path="salgsteam" element={<Salgsteam />} />
            <Route path="ledelsesteam" element={<Ledelsesteam />} />
            <Route path="karriere" element={<Karriere />} />
            <Route path="pb-academy" element={<PBAcademy />} />
            <Route path="pb-power-academy" element={<PBPowerAcademy />} />
            <Route path="videreuddannelse" element={<Videreuddannelse />} />
            <Route path="vores-services" element={<VoresServices />} />
            <Route path="telemarketing" element={<Telemarketing />} />
            <Route path="mødebooking" element={<Mødebooking />} />
            <Route path="leadgenerering" element={<Leadgenerering />} />
            <Route path="seminar" element={<Seminar />} />
            <Route path="kampagnerådgivning" element={<Kampagnerådgivning />} />
            <Route path="markedsanalyse" element={<Markedsanalyse />} />
            <Route path="kvalitative-og-kvantitative-analyser" element={<KoKAnalyser />} />
            <Route path="kundetilfreshed" element={<Kundetilfredshed />} />
            <Route path="behovsanalyse" element={<Behovsanalyse />} />
            <Route path="konkurrentanalyse" element={<Konkurrentanalyse />} />
            <Route path="forbrugeranalyse" element={<Forbrugeranalyse />} />
            <Route path="analyse-egen" element={<Analyseegen />} />
            <Route path="swot" element={<SWOT />} />
            <Route path="pest" element={<PEST />} />
            <Route path="disc" element={<DISC />} />
            <Route path="arbejdsforhold" element={<Arbejdsforhold />} />
            <Route path="vores-kompetencer" element={<VoresKompetencer />} />
            <Route path="emner-og-segmentering" element={<EmnerSegmentering />} />
            <Route path="konventer-møder-til-kunder" element={<KonventerMøder />} />
            <Route path="kvalificering-af-leads" element={<Kvalificering />} />
            <Route path="vores-cases" element={<VoresCases />} />
            <Route path="nyheder" element={<Nyheder />} />
            <Route path="kontakt" element={<Kontakt />} />
            <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;