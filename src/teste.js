const imageUrl = 'https://drive.google.com/uc?id=1yi9M0v2Ij4gwIh56bWJrSTlviEKXhFtr';

const TestImage = () => {
    return (
        <div>
            <h1>Testando Imagem do Google Drive</h1>
            <img src={imageUrl} alt="Teste" />
        </div>
    );
};

export default TestImage;
