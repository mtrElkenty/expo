package expo.modules.interfaces.sensors;

import android.hardware.SensorEventListener2;

public interface SensorService {
  SensorServiceSubscription createSubscriptionForListener(SensorEventListener2 sensorEventListener);
}
