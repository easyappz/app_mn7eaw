import React from 'react';

export const Home = () => {
  return (
    <div data-easytag="id1-src/components/Home/index.jsx" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '60px 40px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        maxWidth: '500px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '48px',
          margin: '0 0 20px 0',
          color: '#333',
          fontWeight: 'bold'
        }}>Добро пожаловать!</h1>
        <p style={{
          fontSize: '18px',
          color: '#666',
          margin: '0 0 30px 0',
          lineHeight: '1.6'
        }}>Это ваше новое приложение на React и Django. Начните создавать что-то удивительное!</p>
        <div style={{
          display: 'flex',
          gap: '15px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button style={{
            background: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            padding: '15px 30px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
          }}
          onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >Начать работу</button>
          <button style={{
            background: 'transparent',
            color: '#667eea',
            border: '2px solid #667eea',
            borderRadius: '10px',
            padding: '15px 30px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.background = '#667eea';
            e.target.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = '#667eea';
          }}
          >Узнать больше</button>
        </div>
      </div>
    </div>
  );
};