﻿using System;
using System.Windows;
using Neutronium.Core;
using Neutronium.Core.JavascriptFramework;

namespace Neutronium.WPF
{
    /// <summary>
    /// Base Wpf application implementation for Neutronium application.
    /// Provides Neutronium application set-up
    /// </summary>
    public abstract class HTMLApp : Application
    {
        private bool _Registered;
        protected string[] Args { get; private set; }

        protected override void OnStartup(StartupEventArgs e)
        {
            Args = e.Args;
            var engine = HTMLEngineFactory.Engine;
            var factory = GetWindowFactory(engine.WebSessionLogger);
            engine.RegisterHTMLEngine(factory);
            engine.RegisterJavaScriptFramework(GetJavascriptUIFrameworkManager());
            OnStartUp(engine);
            base.OnStartup(e);
        }

        protected override void OnActivated(EventArgs e)
        {
            base.OnActivated(e);
            if (_Registered)
                return;

            _Registered = true;
            if (MainWindow == null)
                return;

            MainWindow.Closed += Closed;
        }

        protected override void OnExit(ExitEventArgs e)
        {
            HTMLEngineFactory.Engine.Dispose();
        }

        private void Closed(object sender, EventArgs e)
        {
            HTMLEngineFactory.Engine.Dispose();
        }

        protected virtual void OnStartUp(IHTMLEngineFactory factory) 
        {            
        }

        /// <summary>
        /// Overrode by browser implementation to provide IWPFWebWindowFactory
        /// </summary>
        /// <param name="logger"></param>
        /// <returns></returns>
        protected abstract IWPFWebWindowFactory GetWindowFactory(IWebSessionLogger logger);

        protected abstract IJavascriptFrameworkManager GetJavascriptUIFrameworkManager();
    }
}
