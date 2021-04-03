
interface Config {
  production: boolean;
  backendUrl: string;
}

const config: Config = {
  production: true,
  backendUrl: 'https://seminar.thale.info/api'
};

console.log('Running with config: ');
console.log(config);

export default config;
