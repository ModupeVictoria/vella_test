import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import Navbar from '../components/Navbar';
import ProductList from '../components/product/ProductList';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <Navbar/>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ProductList/>
      </IonContent>
    </IonPage>
    </>
  );
};

export default Tab1;
