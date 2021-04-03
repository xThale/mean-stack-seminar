
interface Config {
  production: boolean;
  backendUrl: string;
}

const config: Config = {
  production: false,
  backendUrl: 'http://localhost:3000/api'
};

console.log('Running with config: ');
console.log(config);

export default config;
