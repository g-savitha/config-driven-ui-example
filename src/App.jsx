import React, { useState, useEffect } from 'react'

import LayoutRenderer from './components/LayoutRenderer';

export default function App() {
  const [config, setConfig] = useState({ sections: [] });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('./dynamic-ui.json');
        const data = await response.json();
        setConfig(data);
      }
      catch (err) {
        console.error('api req failed', err);
      }
      finally {
        setIsLoading(false);
      }
    }
    fetchConfig();
  }, [])
  return (
    <div>
      {isLoading ? <div> Loading... </div>
        : <LayoutRenderer config={config} />}
    </div>
  )
}
