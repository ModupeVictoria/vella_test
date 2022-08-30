import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import Navbar from '../components/Navbar';
import ProductDetail from './../components/product/ProductDetail';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
         
          <Navbar/>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ProductDetail />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
