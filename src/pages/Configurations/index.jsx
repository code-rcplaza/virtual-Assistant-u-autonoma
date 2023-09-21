import { useState } from 'react';

const ConfigurationPage = () => {
  const [configOptions, setConfigOptions] = useState({
    animations: false,
    darkMode: false,
    notifications: false,
    sound: false,
    subtitles: false
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setConfigOptions({
      ...configOptions,
      [name]: checked,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('animations', configOptions.animations);
    console.log('dark mode', configOptions.darkMode);
    console.log('notifications', configOptions.notifications);
    console.log('sound', configOptions.sound);
    console.log('subtitles', configOptions.subtitles);
  }

  return (
    <div className="container ">
      <h1 className='my-5'>Configurations</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="animations" name='animations' checked={configOptions.animations}
              onChange={handleCheckboxChange} />
            <label className="form-check-label" htmlFor="animations">
              Animations
            </label>
          </div>

          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="notifications" name="notifications" checked={configOptions.notifications} onChange={handleCheckboxChange} />
            <label className="form-check-label" htmlFor="notifications">
              Notifications
            </label>
          </div>

          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="darkMode" name="darkMode" checked={configOptions.darkMode}
              onChange={handleCheckboxChange} />
            <label className="form-check-label" htmlFor="darkMode">
              Dark Mode
            </label>
          </div>

          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="sound" name="sound" checked={configOptions.sound}
              onChange={handleCheckboxChange} />
            <label className="form-check-label" htmlFor="sound">
              Sound
            </label>
          </div>

          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="subtitles" name="subtitles" checked={configOptions.language}
              onChange={handleCheckboxChange} />
            <label className="form-check-label" htmlFor="subtitles">
              Subtitles
            </label>
          </div>


          <button className="btn btn-outline-primary mt-3" type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}

export default ConfigurationPage;