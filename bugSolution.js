```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fix: Add count to dependency array or use a different approach like setTimeout
    //setCount(count + 1); 
    let intervalId = setInterval(() => setCount(prev => prev + 1), 1000);
    return () => clearInterval(intervalId); 
  }, []);

  return <div>Count: {count}</div>;
}
```