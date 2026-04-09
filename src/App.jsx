import "./App.css";
import {
  Database,
  Link as LinkIcon,
  Image as ImageIcon,
} from "lucide-react";
import { Rocket,} from 'lucide-react';
import { ChartSpline } from 'lucide-react';



function App() {
  return (
    <div className="container">
      <header>
        <h1><Database /> Oracle Database</h1>
      </header>
      <div className="gr1">
        <section>
        <h2>  <ChartSpline />O que é?</h2>
        <p>
          O Oracle Database é um sistema de gerenciamento de banco de dados relacional (RDBMS) de alto desempenho, líder mundial, desenvolvido pela Oracle Corporation. Ele organiza, armazena e processa grandes volumes de dados de forma estruturada (linhas/colunas), sendo amplamente utilizado por empresas para aplicações críticas, transações online (OLTP) e data warehouses.
        </p>
      </section>
      <div className="gr2">
        <section>

        <h2> <Rocket />Principais Características</h2>
        <p>
          <p> Alta performance</p>
          <p> Segurança avançada</p>
          <p> Escalabilidade</p>
          <p> Grandes volumes de dados</p>
        </p>
      </section>

      </div>
      
      </div>
      <div className="gr3">
          <section>
        <h2> Icone</h2>
        <img
          src="https://th.bing.com/th/id/R.3672d427eecd7556cc1a8aa0ed34db7c?rik=8ZxS3hAoS1D39w&riu=http%3a%2f%2f5.imimg.com%2fdata5%2fSELLER%2fDefault%2f2022%2f7%2fFT%2fWW%2fIM%2f7756102%2foracle-database-enterprise-edition-license-1-processor-500x500.png&ehk=%2fmRZX7LsL296tCcco%2f4%2f7RgYecm4KhP%2bKQ5M8Xd8XxI%3d&risl=&pid=ImgRaw&r=0"
          alt="Oracle Logo"
          width="200"
        />
      </section>

      <section>
        <h2> Imagem</h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
          alt="Oracle Logo"
          width="200"
        />
      </section>

      <section>
        <h2> Links úteis</h2>
        <a href="https://www.oracle.com/database/" target="_blank">
          Site Oficial
        </a>
        <br />
        <a href="https://pt.wikipedia.org/wiki/Oracle_Database" target="_blank">
          Wikipedia
        </a>
      </section>
      </div>

      
    </div>
  );
}

export default App;