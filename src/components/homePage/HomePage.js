import React from 'react';
import {Container} from 'react-bootstrap'
import SearchSection from './searchSection/SearchSection';
import CategoriesSection from './categoriesSection/CategoriesSection';
import TopBusinesses from './topBusinesses/TopBusinesses';
import Pricing from './pricing/Pricing';
 import Footer from '../footer/Footer';

export default function HomePage() {
    return (
        <Container fluid style={{padding: 0, margin: 0}}>
            <SearchSection/>
            <CategoriesSection/>
      <section style={{height: '50vh',
                      //  position: 'relative',
                      //  backgroundSize: 'cover',
                       backgroundColor: 'green'}}>
                           <TopBusinesses/>
                       </section>
    
                        <section>
                           <h2>Pricing</h2>
                            <Pricing/>
                        </section>
                        <footer>
                            <Footer/>
                        </footer>       
                {/* <Row>
                    <Pricing/>
                </Row> */}
            {/* <section style={{//height: '100vh',
                      //  position: 'relative',
                      //  backgroundSize: 'cover',
                    }}>
                                       <Footer/>

                           </section> */}
        </Container>
    )
}