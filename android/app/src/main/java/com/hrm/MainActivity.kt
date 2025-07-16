package com.hrm.app

import android.os.Bundle
import com.facebook.react.ReactActivity
import org.devio.rn.splashscreen.SplashScreen

class MainActivity : ReactActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        
        SplashScreen.show(this, true)
        super.onCreate(savedInstanceState)
    }

    override fun getMainComponentName(): String {
        return "hrm"
    }
}

