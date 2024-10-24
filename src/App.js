import React, { useState } from 'react';
import './App.css';
import MonthButton from './MonthButton';
import Galery from './Galery';
import Footer from './Footer';


const months = [
    'Feijoada do Bem 1', 'Feijoada do Bem 2', 'Motorista Particular', 'Luma Solar', 'Juridico nas Ruas'
];

const imageUrls = [   
  [
      require('./images/1.png'),
      require('./images/2.png'),
      require('./images/3.png'),
      require('./images/4.png'),
      require('./images/5.png'),
      require('./images/6.png'),
      require('./images/8.png'),
      require('./images/9.png'),
      require('./images/10.png'),
      // Adicione mais imagens conforme necessário
  ],
  [
    require('./images/a.png'),
    require('./images/b.png'),
    require('./images/c.png'),
    require('./images/d.png'),
    require('./images/e.png'), 
    require('./images/f.png'),
    require('./images/g.png'),
    require('./images/h.png'),
    require('./images/i.png'),
    require('./images/j.png'),
    require('./images/k.png'),
    require('./images/l.png'),
    require('./images/m.png'),
    require('./images/n.png'),
    require('./images/o.png'),
    require('./images/p.png'),
    require('./images/q.png'),
    require('./images/r.png'),
    require('./images/s.png'),
    require('./images/t.png'),
    require('./images/u.png'),
    require('./images/v.png'),
    // Adicione mais imagens conforme você quiser
  ],
  [
    require('./images/1a.png'),
    require('./images/2a.png'),
    require('./images/3a.png'),
    require('./images/4a.png'),
    require('./images/5a.png'),
    require('./images/6a.png'),
    require('./images/7a.png'),
    require('./images/8a.png'),
    require('./images/9a.png'),
    require('./images/10a.png'),
    // Adicione mais imagens conforme você quiser
   ],
   [
    require('./images/1b.png'),
    require('./images/2b.png'),
    require('./images/3b.png'),
    require('./images/4b.png'),
    require('./images/5b.png'),
    require('./images/6b.png'),
    require('./images/7b.png'),
    require('./images/8b.png'),
    require('./images/9b.png'),
    require('./images/10b.png'),
    require('./images/11b.png'),
    require('./images/12b.png'),
   ],
   [
    require('./images/1c.png'),
    require('./images/2c.png'),
    require('./images/3c.png'),
    require('./images/4c.png'),
    require('./images/5c.png'),
    require('./images/6c.png'),
    require('./images/7c.png'),
    require('./images/8c.png'),
    require('./images/9c.png'),
    require('./images/10c.png'),
    require('./images/11c.png'),
    require('./images/12c.png'),
    require('./images/13c.png'),
   ] // Adicione URLs para os outros meses
];

const App = () => {
    const [activeMonth, setActiveMonth] = useState(null);

    const changeMonth = (index) => {
        setActiveMonth(activeMonth === index ? null : index);
    };

    return (
        <>
           <div className='app-container'>
                <div className="app">
                    <h1>Carlos Moroni Garcia</h1>
                    <h2>Galeria</h2>
                    <div className="month-slider">
                        {months.map((month, index) => (
                            <MonthButton
                                key={index}
                                index={index}
                                month={month}
                                isActive={activeMonth === index}
                                changeMonth={changeMonth}
                            />
                        ))}
                    </div>
                    {activeMonth !== null && (
                        <Galery monthIndex={activeMonth} imageUrls={imageUrls[activeMonth]} />
                    )}
                </div>
                <Footer />
            </div>            
        </>
    );
};

export default App;
