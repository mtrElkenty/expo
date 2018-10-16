module.exports = {
  AIRGoogleMapCalloutManager: {},
  AIRGoogleMapCircleManager: {},
  AIRGoogleMapManager: {
    legalNotice: { type: 'string' },
    animateToBearing: { type: 'function', functionType: 'async' },
    animateToCoordinate: { type: 'function', functionType: 'async' },
    animateToRegion: { type: 'function', functionType: 'async' },
    animateToViewingAngle: { type: 'function', functionType: 'async' },
    coordinateForPoint: { type: 'function', functionType: 'async' },
    fitToCoordinates: { type: 'function', functionType: 'async' },
    fitToElements: { type: 'function', functionType: 'async' },
    fitToSuppliedMarkers: { type: 'function', functionType: 'async' },
    pointForCoordinate: { type: 'function', functionType: 'async' },
    setMapBoundaries: { type: 'function', functionType: 'async' },
    takeSnapshot: { type: 'function', functionType: 'async' },
  },
  AIRGoogleMapMarkerManager: {
    hideCallout: { type: 'function', functionType: 'async' },
    showCallout: { type: 'function', functionType: 'async' },
  },
  AIRGoogleMapOverlayManager: {},
  AIRGoogleMapPolygonManager: {},
  AIRGoogleMapPolylineManager: {},
  AIRGoogleMapUrlTileManager: {},
  AIRMapCalloutManager: {},
  AIRMapCircleManager: {},
  AIRMapLocalTileManager: {},
  AIRMapManager: {
    animateToBearing: { type: 'function', functionType: 'async' },
    animateToCoordinate: { type: 'function', functionType: 'async' },
    animateToRegion: { type: 'function', functionType: 'async' },
    animateToViewingAngle: { type: 'function', functionType: 'async' },
    coordinateForPoint: { type: 'function', functionType: 'promise' },
    fitToCoordinates: { type: 'function', functionType: 'async' },
    fitToElements: { type: 'function', functionType: 'async' },
    fitToSuppliedMarkers: { type: 'function', functionType: 'async' },
    pointForCoordinate: { type: 'function', functionType: 'promise' },
    takeSnapshot: { type: 'function', functionType: 'async' },
  },
  AIRMapMarkerManager: {
    hideCallout: { type: 'function', functionType: 'async' },
    showCallout: { type: 'function', functionType: 'async' },
  },
  AIRMapOverlayManager: {},
  AIRMapPolygonManager: {},
  AIRMapPolylineManager: {},
  AIRMapUrlTileManager: {},
  CTKAdSettingsManager: {
    currentDeviceHash: { type: 'string' },
    addTestDevice: { type: 'function', functionType: 'async' },
    clearTestDevices: { type: 'function', functionType: 'async' },
    setIsChildDirected: { type: 'function', functionType: 'async' },
    setLogLevel: { type: 'function', functionType: 'async' },
    setMediationService: { type: 'function', functionType: 'async' },
    setUrlPrefix: { type: 'function', functionType: 'async' },
  },
  CTKBannerViewManager: {},
  CTKInterstitialAdManager: { showAd: { type: 'function', functionType: 'promise' } },
  CTKNativeAdEmitter: {
    addListener: { type: 'function', functionType: 'async' },
    removeListeners: { type: 'function', functionType: 'async' },
  },
  CTKNativeAdManager: {
    disableAutoRefresh: { type: 'function', functionType: 'async' },
    init: { type: 'function', functionType: 'async' },
    registerViewsForInteraction: { type: 'function', functionType: 'promise' },
    setMediaCachePolicy: { type: 'function', functionType: 'async' },
  },
  ExpoNativeModuleIntrospection: {
    getNativeModuleNamesAsync: { type: 'function', functionType: 'promise' },
    introspectNativeModuleAsync: { type: 'function', functionType: 'promise' },
  },
  ExpoNativeModuleProxy: {
    exportedMethods: {
      type: 'object',
      mock: {
        ExpoFaceDetector: [{ key: 0, argumentsCount: 1, name: 'detectFaces' }],
        ExpoContacts: [
          { key: 0, argumentsCount: 0, name: 'getDefaultContainerIdentifierAsync' },
          { key: 1, argumentsCount: 2, name: 'addExistingGroupToContainerAsync' },
          { key: 2, argumentsCount: 2, name: 'createGroupAsync' },
          { key: 3, argumentsCount: 2, name: 'addContactAsync' },
          { key: 4, argumentsCount: 1, name: 'removeGroupAsync' },
          { key: 5, argumentsCount: 2, name: 'removeContactFromGroupAsync' },
          { key: 6, argumentsCount: 1, name: 'removeContactAsync' },
          { key: 7, argumentsCount: 1, name: 'updateContactAsync' },
          { key: 8, argumentsCount: 1, name: 'getGroupsAsync' },
          { key: 9, argumentsCount: 2, name: 'addExistingContactToGroupAsync' },
          { key: 10, argumentsCount: 1, name: 'getContainersAsync' },
          { key: 11, argumentsCount: 2, name: 'updateGroupNameAsync' },
          { key: 12, argumentsCount: 1, name: 'getContactsAsync' },
          { key: 13, argumentsCount: 3, name: 'presentFormAsync' },
          { key: 14, argumentsCount: 1, name: 'writeContactToFileAsync' },
          { key: 15, argumentsCount: 0, name: 'dismissFormAsync' },
        ],
        ExpoAdsAdMobInterstitialManager: [
          { key: 0, argumentsCount: 1, name: 'setTestDeviceID' },
          { key: 1, argumentsCount: 0, name: 'requestAd' },
          { key: 2, argumentsCount: 0, name: 'showAd' },
          { key: 3, argumentsCount: 0, name: 'dismissAd' },
          { key: 4, argumentsCount: 1, name: 'setAdUnitID' },
          { key: 5, argumentsCount: 0, name: 'getIsReady' },
        ],
        ExpoBarCodeScannerView: [],
        ExponentMediaLibrary: [
          { key: 0, argumentsCount: 1, name: 'getAlbumAsync' },
          { key: 1, argumentsCount: 1, name: 'createAssetAsync' },
          { key: 2, argumentsCount: 0, name: 'getAlbumsAsync' },
          { key: 3, argumentsCount: 1, name: 'deleteAssetsAsync' },
          { key: 4, argumentsCount: 2, name: 'addAssetsToAlbumAsync' },
          { key: 5, argumentsCount: 0, name: 'getMomentsAsync' },
          { key: 6, argumentsCount: 1, name: 'getAssetInfoAsync' },
          { key: 7, argumentsCount: 2, name: 'deleteAlbumsAsync' },
          { key: 8, argumentsCount: 2, name: 'removeAssetsFromAlbumAsync' },
          { key: 9, argumentsCount: 2, name: 'createAlbumAsync' },
          { key: 10, argumentsCount: 1, name: 'getAssetsAsync' },
        ],
        ExponentPedometer: [
          { key: 0, argumentsCount: 2, name: 'getStepCountAsync' },
          { key: 1, argumentsCount: 0, name: 'isAvailableAsync' },
        ],
        ExpoAdsAdMobRewardedVideoAdManager: [
          { key: 0, argumentsCount: 1, name: 'setTestDeviceID' },
          { key: 1, argumentsCount: 0, name: 'requestAd' },
          { key: 2, argumentsCount: 0, name: 'showAd' },
          { key: 3, argumentsCount: 0, name: 'dismissAd' },
          { key: 4, argumentsCount: 1, name: 'setAdUnitID' },
          { key: 5, argumentsCount: 0, name: 'getIsReady' },
        ],
        ExpoPublisherBannerView: [],
        ExponentGyroscope: [{ key: 0, argumentsCount: 1, name: 'setUpdateInterval' }],
        ExpoLocalAuthentication: [
          { key: 0, argumentsCount: 0, name: 'hasHardwareAsync' },
          { key: 1, argumentsCount: 0, name: 'isEnrolledAsync' },
          { key: 2, argumentsCount: 1, name: 'authenticateAsync' },
        ],
        ExponentGLViewManager: [],
        ExponentCameraManager: [
          { key: 0, argumentsCount: 1, name: 'stopRecording' },
          { key: 1, argumentsCount: 2, name: 'getAvailablePictureSizes' },
          { key: 2, argumentsCount: 2, name: 'takePicture' },
          { key: 3, argumentsCount: 1, name: 'pausePreview' },
          { key: 4, argumentsCount: 2, name: 'record' },
          { key: 5, argumentsCount: 1, name: 'resumePreview' },
        ],
        ExpoPermissions: [
          { key: 0, argumentsCount: 1, name: 'getAsync' },
          { key: 1, argumentsCount: 1, name: 'askAsync' },
        ],
        ExponentDeviceMotion: [{ key: 0, argumentsCount: 1, name: 'setUpdateInterval' }],
        ExponentAccelerometer: [{ key: 0, argumentsCount: 1, name: 'setUpdateInterval' }],
        ExponentConstants: [{ key: 0, argumentsCount: 0, name: 'getWebViewUserAgentAsync' }],
        ExpoSMS: [
          { key: 0, argumentsCount: 0, name: 'isAvailableAsync' },
          { key: 1, argumentsCount: 2, name: 'sendSMSAsync' },
        ],
        ExpoBarCodeScannerModule: [{ key: 0, argumentsCount: 2, name: 'scanFromURLAsync' }],
        ExpoLocation: [
          { key: 0, argumentsCount: 0, name: 'getProviderStatusAsync' },
          { key: 1, argumentsCount: 1, name: 'reverseGeocodeAsync' },
          { key: 2, argumentsCount: 1, name: 'geocodeAsync' },
          { key: 3, argumentsCount: 1, name: 'removeWatchAsync' },
          { key: 4, argumentsCount: 0, name: 'requestPermissionsAsync' },
          { key: 5, argumentsCount: 2, name: 'watchPositionImplAsync' },
          { key: 6, argumentsCount: 1, name: 'getCurrentPositionAsync' },
          { key: 7, argumentsCount: 1, name: 'watchDeviceHeading' },
        ],
        ExpoAdsAdMobBannerView: [],
        ExponentMagnetometer: [{ key: 0, argumentsCount: 1, name: 'setUpdateInterval' }],
        ExponentMagnetometerUncalibrated: [
          { key: 0, argumentsCount: 1, name: 'setUpdateInterval' },
        ],
        ExponentSegment: [
          { key: 0, argumentsCount: 0, name: 'flush' },
          { key: 1, argumentsCount: 2, name: 'screenWithProperties' },
          { key: 2, argumentsCount: 1, name: 'setEnabledAsync' },
          { key: 3, argumentsCount: 1, name: 'screen' },
          { key: 4, argumentsCount: 1, name: 'identify' },
          { key: 5, argumentsCount: 2, name: 'identifyWithTraits' },
          { key: 6, argumentsCount: 1, name: 'initializeAndroid' },
          { key: 7, argumentsCount: 2, name: 'trackWithProperties' },
          { key: 8, argumentsCount: 1, name: 'initializeIOS' },
          { key: 9, argumentsCount: 2, name: 'groupWithTraits' },
          { key: 10, argumentsCount: 1, name: 'group' },
          { key: 11, argumentsCount: 0, name: 'getEnabledAsync' },
          { key: 12, argumentsCount: 1, name: 'track' },
          { key: 13, argumentsCount: 0, name: 'reset' },
        ],
        ExponentGLObjectManager: [
          { key: 0, argumentsCount: 0, name: 'createContextAsync' },
          { key: 1, argumentsCount: 1, name: 'destroyContextAsync' },
          { key: 2, argumentsCount: 1, name: 'destroyObjectAsync' },
          { key: 3, argumentsCount: 2, name: 'createCameraTextureAsync' },
          { key: 4, argumentsCount: 2, name: 'takeSnapshotAsync' },
        ],
        ExpoFontLoader: [{ key: 0, argumentsCount: 2, name: 'loadAsync' }],
        ExponentPrint: [
          { key: 0, argumentsCount: 1, name: 'print' },
          { key: 1, argumentsCount: 0, name: 'selectPrinter' },
          { key: 2, argumentsCount: 1, name: 'printToFileAsync' },
        ],
        ExponentFileSystem: [
          { key: 0, argumentsCount: 5, name: 'downloadResumableStartAsync' },
          { key: 1, argumentsCount: 1, name: 'downloadResumablePauseAsync' },
          { key: 2, argumentsCount: 2, name: 'readAsStringAsync' },
          { key: 3, argumentsCount: 3, name: 'writeAsStringAsync' },
          { key: 4, argumentsCount: 2, name: 'makeDirectoryAsync' },
          { key: 5, argumentsCount: 2, name: 'getInfoAsync' },
          { key: 6, argumentsCount: 2, name: 'deleteAsync' },
          { key: 7, argumentsCount: 1, name: 'copyAsync' },
          { key: 8, argumentsCount: 2, name: 'readDirectoryAsync' },
          { key: 9, argumentsCount: 3, name: 'downloadAsync' },
          { key: 10, argumentsCount: 1, name: 'moveAsync' },
        ],
      },
    },
    modulesConstants: {
      type: 'mock',
      mockDefinition: {
        ExpoBarCodeScannerModule: {
          BarCodeType: { type: 'object' },
          Type: { type: 'object' },
          addListener: { type: 'function' },
          removeListeners: { type: 'function' },
          scanFromURLAsync: { type: 'function' },
        },
        ExpoFaceDetector: {
          Classifications: { type: 'object' },
          Landmarks: { type: 'object' },
          Mode: { type: 'object' },
          addListener: { type: 'function' },
          detectFaces: { type: 'function' },
          removeListeners: { type: 'function' },
        },
        ExponentCameraManager: {
          AutoFocus: { type: 'object' },
          FlashMode: { type: 'object' },
          Type: { type: 'object' },
          VideoQuality: { type: 'object' },
          VideoStabilization: { type: 'object' },
          WhiteBalance: { type: 'object' },
          addListener: { type: 'function' },
          getAvailablePictureSizes: { type: 'function' },
          pausePreview: { type: 'function' },
          record: { type: 'function' },
          removeListeners: { type: 'function' },
          resumePreview: { type: 'function' },
          stopRecording: { type: 'function' },
          takePicture: { type: 'function' },
        },
        ExponentConstants: {
          addListener: { type: 'function' },
          appOwnership: { type: 'string' },
          deviceName: { type: 'string' },
          deviceYearClass: { type: 'number', mock: 2018 },
          experienceUrl: { type: 'string' },
          expoRuntimeVersion: { type: 'string' },
          expoVersion: { type: 'string' },
          getWebViewUserAgentAsync: { type: 'function' },
          installationId: { type: 'string' },
          isDevice: { type: 'boolean', mock: false },
          linkingUri: { type: 'string' },
          manifest: { type: 'object' },
          platform: { type: 'object' },
          removeListeners: { type: 'function' },
          sessionId: { type: 'string' },
          statusBarHeight: { type: 'number', mock: 44 },
          systemFonts: { type: 'array' },
        },
        ExponentDeviceMotion: {
          Gravity: { type: 'number', mock: 9.8100004196167 },
          addListener: { type: 'function' },
          removeListeners: { type: 'function' },
          setUpdateInterval: { type: 'function' },
        },
        ExponentFileSystem: {
          addListener: { type: 'function' },
          bundleDirectory: { type: 'object', mock: null },
          bundledAssets: { type: 'object', mock: null },
          cacheDirectory: { type: 'string' },
          copyAsync: { type: 'function' },
          deleteAsync: { type: 'function' },
          documentDirectory: { type: 'string' },
          downloadAsync: { type: 'function' },
          downloadResumablePauseAsync: { type: 'function' },
          downloadResumableStartAsync: { type: 'function' },
          getInfoAsync: { type: 'function' },
          makeDirectoryAsync: { type: 'function' },
          moveAsync: { type: 'function' },
          readAsStringAsync: { type: 'function' },
          readDirectoryAsync: { type: 'function' },
          removeListeners: { type: 'function' },
          writeAsStringAsync: { type: 'function' },
        },
        ExponentMediaLibrary: {
          CHANGE_LISTENER_NAME: { type: 'string' },
          MediaType: { type: 'object' },
          SortBy: { type: 'object' },
          addAssetsToAlbumAsync: { type: 'function' },
          addListener: { type: 'function' },
          createAlbumAsync: { type: 'function' },
          createAssetAsync: { type: 'function' },
          deleteAlbumsAsync: { type: 'function' },
          deleteAssetsAsync: { type: 'function' },
          getAlbumAsync: { type: 'function' },
          getAlbumsAsync: { type: 'function' },
          getAssetInfoAsync: { type: 'function' },
          getAssetsAsync: { type: 'function' },
          getMomentsAsync: { type: 'function' },
          removeAssetsFromAlbumAsync: { type: 'function' },
          removeListeners: { type: 'function' },
        },
        ExponentPrint: {
          Orientation: { type: 'object' },
          addListener: { type: 'function' },
          print: { type: 'function' },
          printToFileAsync: { type: 'function' },
          removeListeners: { type: 'function' },
          selectPrinter: { type: 'function' },
        },
      },
    },
    viewManagersNames: {
      type: 'array',
      mock: [
        'ExpoAdsPublisherBannerView',
        'ExponentGLView',
        'ExpoBarCodeScannerView',
        'ExpoAdsAdMobBannerView',
        'ExponentCamera',
      ],
    },
    callMethod: { type: 'function', functionType: 'promise' },
  },
  ExponentAR: {
    ARFaceTrackingConfiguration: { type: 'boolean', mock: false },
    ARKitVersion: { type: 'string' },
    AROrientationTrackingConfiguration: { type: 'boolean', mock: true },
    ARWorldTrackingConfiguration: { type: 'boolean', mock: false },
    OrientationTrackingVideoFormats: { type: 'array' },
    WorldTrackingVideoFormats: { type: 'array' },
    anchorsDidUpdate: { type: 'string' },
    cameraDidChangeTrackingState: { type: 'string' },
    didFailWithError: { type: 'string' },
    frameDidUpdate: { type: 'string' },
    isSupported: { type: 'boolean', mock: true },
    sessionInterruptionEnded: { type: 'string' },
    sessionWasInterrupted: { type: 'string' },
    addListener: { type: 'function', functionType: 'async' },
    getARMatrices: { type: 'function', functionType: 'sync' },
    getAutoFocusEnabled: { type: 'function', functionType: 'sync' },
    getCameraTexture: { type: 'function', functionType: 'sync' },
    getCurrentFrame: { type: 'function', functionType: 'sync' },
    getLightEstimationEnabled: { type: 'function', functionType: 'sync' },
    getPlaneDetection: { type: 'function', functionType: 'sync' },
    getProvidesAudioData: { type: 'function', functionType: 'sync' },
    getVideoFormat: { type: 'function', functionType: 'sync' },
    getWorldAlignment: { type: 'function', functionType: 'sync' },
    pause: { type: 'function', functionType: 'async' },
    performHitTest: { type: 'function', functionType: 'sync' },
    removeListeners: { type: 'function', functionType: 'async' },
    reset: { type: 'function', functionType: 'async' },
    resume: { type: 'function', functionType: 'async' },
    setAutoFocusEnabled: { type: 'function', functionType: 'async' },
    setConfigurationAsync: { type: 'function', functionType: 'promise' },
    setDetectionImagesAsync: { type: 'function', functionType: 'promise' },
    setLightEstimationEnabled: { type: 'function', functionType: 'async' },
    setPlaneDetection: { type: 'function', functionType: 'async' },
    setProvidesAudioData: { type: 'function', functionType: 'async' },
    setShouldAttemptRelocalization: { type: 'function', functionType: 'async' },
    setWorldAlignment: { type: 'function', functionType: 'async' },
    setWorldOriginAsync: { type: 'function', functionType: 'promise' },
    startAsync: { type: 'function', functionType: 'promise' },
    stopAsync: { type: 'function', functionType: 'promise' },
  },
  ExponentAV: {
    addListener: { type: 'function', functionType: 'async' },
    getAudioRecordingStatus: { type: 'function', functionType: 'promise' },
    getStatusForSound: { type: 'function', functionType: 'promise' },
    getStatusForVideo: { type: 'function', functionType: 'promise' },
    loadForSound: { type: 'function', functionType: 'async' },
    loadForVideo: { type: 'function', functionType: 'promise' },
    pauseAudioRecording: { type: 'function', functionType: 'promise' },
    prepareAudioRecorder: { type: 'function', functionType: 'promise' },
    removeListeners: { type: 'function', functionType: 'async' },
    replaySound: { type: 'function', functionType: 'promise' },
    replayVideo: { type: 'function', functionType: 'promise' },
    setAudioIsEnabled: { type: 'function', functionType: 'promise' },
    setAudioMode: { type: 'function', functionType: 'promise' },
    setErrorCallbackForSound: { type: 'function', functionType: 'async' },
    setStatusForSound: { type: 'function', functionType: 'promise' },
    setStatusForVideo: { type: 'function', functionType: 'promise' },
    startAudioRecording: { type: 'function', functionType: 'promise' },
    stopAudioRecording: { type: 'function', functionType: 'promise' },
    unloadAudioRecorder: { type: 'function', functionType: 'promise' },
    unloadForSound: { type: 'function', functionType: 'promise' },
    unloadForVideo: { type: 'function', functionType: 'promise' },
  },
  ExponentAmplitude: {
    clearUserProperties: { type: 'function', functionType: 'async' },
    initialize: { type: 'function', functionType: 'async' },
    logEvent: { type: 'function', functionType: 'async' },
    logEventWithProperties: { type: 'function', functionType: 'async' },
    setGroup: { type: 'function', functionType: 'async' },
    setUserId: { type: 'function', functionType: 'async' },
    setUserProperties: { type: 'function', functionType: 'async' },
  },
  ExponentBlurViewManager: {},
  ExponentBrightness: {
    getBrightnessAsync: { type: 'function', functionType: 'promise' },
    setBrightnessAsync: { type: 'function', functionType: 'promise' },
  },
  ExponentCalendar: {
    deleteCalendarAsync: { type: 'function', functionType: 'promise' },
    deleteEventAsync: { type: 'function', functionType: 'promise' },
    deleteReminderAsync: { type: 'function', functionType: 'promise' },
    getAttendeesForEventAsync: { type: 'function', functionType: 'promise' },
    getCalendarsAsync: { type: 'function', functionType: 'promise' },
    getEventByIdAsync: { type: 'function', functionType: 'promise' },
    getEventsAsync: { type: 'function', functionType: 'promise' },
    getReminderByIdAsync: { type: 'function', functionType: 'promise' },
    getRemindersAsync: { type: 'function', functionType: 'promise' },
    getSourceByIdAsync: { type: 'function', functionType: 'promise' },
    getSourcesAsync: { type: 'function', functionType: 'promise' },
    saveCalendarAsync: { type: 'function', functionType: 'promise' },
    saveEventAsync: { type: 'function', functionType: 'promise' },
    saveReminderAsync: { type: 'function', functionType: 'promise' },
  },
  ExponentDocumentPicker: { getDocumentAsync: { type: 'function', functionType: 'promise' } },
  ExponentErrorRecovery: { setRecoveryProps: { type: 'function', functionType: 'async' } },
  ExponentFacebook: {
    logInWithReadPermissionsAsync: { type: 'function', functionType: 'promise' },
  },
  ExponentGoogle: { logInAsync: { type: 'function', functionType: 'promise' } },
  ExponentHaptic: {
    impact: { type: 'function', functionType: 'async' },
    notification: { type: 'function', functionType: 'async' },
    selection: { type: 'function', functionType: 'async' },
  },
  ExponentImageManipulator: { manipulate: { type: 'function', functionType: 'promise' } },
  ExponentImagePicker: {
    launchCameraAsync: { type: 'function', functionType: 'promise' },
    launchImageLibraryAsync: { type: 'function', functionType: 'promise' },
  },
  ExponentKeepAwake: {
    activate: { type: 'function', functionType: 'async' },
    deactivate: { type: 'function', functionType: 'async' },
  },
  ExponentLinearGradientManager: {},
  ExponentLocalization: {
    getCurrentDeviceCountryAsync: { type: 'function', functionType: 'promise' },
    getCurrentLocaleAsync: { type: 'function', functionType: 'promise' },
    getCurrentTimeZoneAsync: { type: 'function', functionType: 'promise' },
    getISOCurrencyCodesAsync: { type: 'function', functionType: 'promise' },
    getPreferredLocalesAsync: { type: 'function', functionType: 'promise' },
  },
  ExponentMailComposer: { composeAsync: { type: 'function', functionType: 'promise' } },
  ExponentNotifications: {
    cancelAllScheduledNotifications: { type: 'function', functionType: 'promise' },
    cancelAllScheduledNotificationsAsync: { type: 'function', functionType: 'promise' },
    cancelScheduledNotification: { type: 'function', functionType: 'async' },
    getBadgeNumberAsync: { type: 'function', functionType: 'promise' },
    getDevicePushTokenAsync: { type: 'function', functionType: 'promise' },
    getExponentPushTokenAsync: { type: 'function', functionType: 'promise' },
    presentLocalNotification: { type: 'function', functionType: 'promise' },
    scheduleLocalNotification: { type: 'function', functionType: 'promise' },
    setBadgeNumberAsync: { type: 'function', functionType: 'promise' },
  },
  ExponentSQLite: {
    close: { type: 'function', functionType: 'async' },
    exec: { type: 'function', functionType: 'promise' },
  },
  ExponentScopedModuleRegistry: {},
  ExponentScreenOrientation: {
    allowAsync: { type: 'function', functionType: 'promise' },
    doesSupportAsync: { type: 'function', functionType: 'promise' },
  },
  ExponentSecureStore: {
    AFTER_FIRST_UNLOCK: { type: 'number', mock: 0 },
    AFTER_FIRST_UNLOCK_THIS_DEVICE_ONLY: { type: 'number', mock: 1 },
    ALWAYS: { type: 'number', mock: 2 },
    ALWAYS_THIS_DEVICE_ONLY: { type: 'number', mock: 4 },
    WHEN_PASSCODE_SET_THIS_DEVICE_ONLY: { type: 'number', mock: 3 },
    WHEN_UNLOCKED: { type: 'number', mock: 5 },
    WHEN_UNLOCKED_THIS_DEVICE_ONLY: { type: 'number', mock: 6 },
    deleteValueWithKeyAsync: { type: 'function', functionType: 'promise' },
    getValueWithKeyAsync: { type: 'function', functionType: 'promise' },
    setValueWithKeyAsync: { type: 'function', functionType: 'promise' },
  },
  ExponentSpeech: {
    addListener: { type: 'function', functionType: 'async' },
    isSpeaking: { type: 'function', functionType: 'promise' },
    pause: { type: 'function', functionType: 'async' },
    removeListeners: { type: 'function', functionType: 'async' },
    resume: { type: 'function', functionType: 'async' },
    speak: { type: 'function', functionType: 'async' },
    stop: { type: 'function', functionType: 'async' },
  },
  ExponentSplashScreen: {
    hide: { type: 'function', functionType: 'async' },
    preventAutoHide: { type: 'function', functionType: 'async' },
  },
  ExponentStoreReview: {
    isSupported: { type: 'boolean', mock: true },
    requestReview: { type: 'function', functionType: 'async' },
  },
  ExponentUpdates: {
    checkForUpdateAsync: { type: 'function', functionType: 'promise' },
    fetchUpdateAsync: { type: 'function', functionType: 'promise' },
    reload: { type: 'function', functionType: 'async' },
    reloadFromCache: { type: 'function', functionType: 'async' },
  },
  ExponentUtil: {},
  ExponentVideoManager: {
    ScaleAspectFill: { type: 'string' },
    ScaleAspectFit: { type: 'string' },
    ScaleNone: { type: 'string' },
    ScaleToFill: { type: 'string' },
    setFullscreen: { type: 'function', functionType: 'promise' },
  },
  ExponentWebBrowser: {
    dismissAuthSession: { type: 'function', functionType: 'async' },
    dismissBrowser: { type: 'function', functionType: 'async' },
    openAuthSessionAsync: { type: 'function', functionType: 'promise' },
    openBrowserAsync: { type: 'function', functionType: 'promise' },
  },
  LottieAnimationView: {
    VERSION: { type: 'number', mock: 1 },
    play: { type: 'function', functionType: 'async' },
    reset: { type: 'function', functionType: 'async' },
  },
  RNAWSCognito: {
    computeModPow: { type: 'function', functionType: 'async' },
    computeS: { type: 'function', functionType: 'async' },
  },
  RNBranch: {
    ADD_TO_CART_EVENT: { type: 'string' },
    ADD_TO_WISHLIST_EVENT: { type: 'string' },
    INIT_SESSION_ERROR: { type: 'string' },
    INIT_SESSION_SUCCESS: { type: 'string' },
    PURCHASED_EVENT: { type: 'string' },
    PURCHASE_INITIATED_EVENT: { type: 'string' },
    REGISTER_VIEW_EVENT: { type: 'string' },
    SHARE_COMPLETED_EVENT: { type: 'string' },
    SHARE_INITIATED_EVENT: { type: 'string' },
    STANDARD_EVENT_ACHIEVE_LEVEL: { type: 'string' },
    STANDARD_EVENT_ADD_PAYMENT_INFO: { type: 'string' },
    STANDARD_EVENT_ADD_TO_CART: { type: 'string' },
    STANDARD_EVENT_ADD_TO_WISHLIST: { type: 'string' },
    STANDARD_EVENT_COMPLETE_REGISTRATION: { type: 'string' },
    STANDARD_EVENT_COMPLETE_TUTORIAL: { type: 'string' },
    STANDARD_EVENT_INITIATE_PURCHASE: { type: 'string' },
    STANDARD_EVENT_PURCHASE: { type: 'string' },
    STANDARD_EVENT_RATE: { type: 'string' },
    STANDARD_EVENT_SEARCH: { type: 'string' },
    STANDARD_EVENT_SHARE: { type: 'string' },
    STANDARD_EVENT_SPEND_CREDITS: { type: 'string' },
    STANDARD_EVENT_UNLOCK_ACHIEVEMENT: { type: 'string' },
    STANDARD_EVENT_VIEW_CART: { type: 'string' },
    STANDARD_EVENT_VIEW_ITEM: { type: 'string' },
    STANDARD_EVENT_VIEW_ITEMS: { type: 'string' },
    createUniversalObject: { type: 'function', functionType: 'promise' },
    generateShortUrl: { type: 'function', functionType: 'promise' },
    getCreditHistory: { type: 'function', functionType: 'promise' },
    getFirstReferringParams: { type: 'function', functionType: 'promise' },
    getLatestReferringParams: { type: 'function', functionType: 'promise' },
    getShortUrl: { type: 'function', functionType: 'promise' },
    listOnSpotlight: { type: 'function', functionType: 'promise' },
    loadRewards: { type: 'function', functionType: 'promise' },
    logEvent: { type: 'function', functionType: 'promise' },
    logout: { type: 'function', functionType: 'async' },
    openURL: { type: 'function', functionType: 'async' },
    redeemInitSessionResult: { type: 'function', functionType: 'promise' },
    redeemRewards: { type: 'function', functionType: 'promise' },
    registerView: { type: 'function', functionType: 'promise' },
    releaseUniversalObject: { type: 'function', functionType: 'async' },
    sendCommerceEvent: { type: 'function', functionType: 'promise' },
    setIdentity: { type: 'function', functionType: 'async' },
    showShareSheet: { type: 'function', functionType: 'promise' },
    userCompletedAction: { type: 'function', functionType: 'async' },
    userCompletedActionOnUniversalObject: { type: 'function', functionType: 'promise' },
  },
  RNBranchEventEmitter: {
    addListener: { type: 'function', functionType: 'async' },
    removeListeners: { type: 'function', functionType: 'async' },
  },
  RNGestureHandlerButton: {},
  RNGestureHandlerModule: {
    Direction: { type: 'object' },
    State: { type: 'object' },
    addListener: { type: 'function', functionType: 'async' },
    attachGestureHandler: { type: 'function', functionType: 'async' },
    createGestureHandler: { type: 'function', functionType: 'async' },
    dropGestureHandler: { type: 'function', functionType: 'async' },
    handleClearJSResponder: { type: 'function', functionType: 'async' },
    handleSetJSResponder: { type: 'function', functionType: 'async' },
    removeListeners: { type: 'function', functionType: 'async' },
    updateGestureHandler: { type: 'function', functionType: 'async' },
  },
  RNSScreenContainerManager: {},
  RNSScreenManager: {},
  RNSVGCircleManager: {},
  RNSVGClipPathManager: {},
  RNSVGDefsManager: {},
  RNSVGEllipseManager: {},
  RNSVGGroupManager: {},
  RNSVGImageManager: {},
  RNSVGLineManager: {},
  RNSVGLinearGradientManager: {},
  RNSVGNodeManager: {},
  RNSVGPathManager: {},
  RNSVGRadialGradientManager: {},
  RNSVGRectManager: {},
  RNSVGRenderableManager: {},
  RNSVGSvgViewManager: { toDataURL: { type: 'function', functionType: 'async' } },
  RNSVGSymbolManager: {},
  RNSVGTSpanManager: {},
  RNSVGTextManager: {},
  RNSVGTextPathManager: {},
  RNSVGUseManager: {},
  RNViewShot: { takeSnapshot: { type: 'function', functionType: 'promise' } },
};
