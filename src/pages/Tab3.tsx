import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import Cart from '../components/product/Cart';
import Navbar from '../components/Navbar';


const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <Navbar/>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Cart/>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
