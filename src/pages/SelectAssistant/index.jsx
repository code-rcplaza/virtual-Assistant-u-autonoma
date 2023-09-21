import './SelectAssistant.styles.scss';

const SelectAsistanPage = () => {
  const assistants = [
    {
      id: "123",
      name: 'George Washington',
      src: "src/assets/figures/washington.jpg"
    }, {
      id: "456",
      name: 'La Gioconda',
      src: "src/assets/figures/lisa.jpg"
    }, {
      id: "789",
      name: 'Napoleon Bonaparte',
      src: "src/assets/figures/napoleon.jpg"
    }, {
      id: "321",
      name: 'Frankenstein',
      src: "src/assets/figures/franki.jpg"
    }, {
      id: "654",
      name: 'Cayo Julio Cesar',
      src: "src/assets/figures/caesar.jpg"
    }, {
      id: "987",
      name: 'Vincent van Gogh',
      src: "src/assets/figures/vangogh.jpg"
    },];

  const handleAssistantClick = (assistant) => {
    console.log('ASSISTANT ID: ', assistant.id);
  }

  return (
    <div className="container">
      <h1 className='h1 my-5'>Select your assistant</h1>
      <div className="mt-5">
        <section className="stn-assistants">
          {
            assistants.map((assistant, index) => (
              <div key={index} className="col-3 card assistant" onClick={() => handleAssistantClick(assistant)} >
                <img src={assistant.src} className="card-img-top" alt={assistant.name} />
                <div className="card-body">
                  <p className="card-text">{assistant.name}</p>
                </div>
              </div>
            ))
          }
        </section>
      </div>
    </div>
  );
}

export default SelectAsistanPage;