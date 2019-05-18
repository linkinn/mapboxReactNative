# Desafio 3 GoNative

---

Nesse desafio você utilizará mapas para construir uma interface de cadastro de localização de
usuários do Github, o processo é simples, ao pressionar o mapa, um modal será aberto com o
campo para digitar um usuário do Github, ao clicar em “Salvar”, uma requisição à API do Github
deve ser feita buscando dados como nome, avatar e bio do usuário e aparecer no mapa com
seu avatar, ao clicar em cima do usuário no mapa, deve aparecer uma caixa em cima do
usuário exibindo seu nome e bio.

---

### Regras

- Você pode utilizar a biblioteca React Native MapBox para criar o mapa, siga os passos de
  instalação aqui, ou seguindo esse post no blog da Rocketseat;
- A localização inicial do mapa deve ser: Latitude: -27.2177659 e Longitude: -49.6451598, a
  latitudeDelta deve ser 0.0042 e longitudeDelta 0.0031. Você pode alterar esse valores caso
  ache melhor.
- O modal para cadastro de localidade só deve ser aberto após o usuário manter
  pressionado o mapa algum tempo (não é um simples clique).
- A localização utilizada para cadastro deve ser a mesma que o usuário pressionou no
  mapa.
- Deve-se buscar o nome, bio e avatar do usuário no Github ao cadastrar.
- Ao clicar em cima do avatar do usuário no mapa deve-se exibir seu nome e bio em uma
  caixa branca, isso pode ser utilizando o recurso de callout.
- A requisição à API deve ser feita utilizando Redux Saga;

### Dicas

- Você irá precisar criar uma conta na aplicação MapBox no plano grátis para conseguir
  utilizar os mapas: https://www.mapbox.com/signin/
- Para personalizar a marcação no mapa com o avatar do usuário, é necessária a utilização
  de uma tag Image dentro da tag PointAnnotation do MapBox.
- Para detectar um clique longo em cima do mapa é necessária a utilização da função
  onLongPress do MapView;
- Para criar o Modal, utilize o componente Modal do React Native

---

### Dependencias

```
yarn add redux
yarn add redux-saga
yarn add react-redux
yarn add axios
yarn add reactotron-react-native
yarn add reactotron-redux
yarn add reactotron-redux-saga
yarn add @mapbox/react-native-mapbox-gl
yarn add react-native-dotenv
```

### DevDependencias

```
yarn add babel-eslint -D
yarn add babel-plugin-root-import -D
yarn add eslint -D
yarn add eslint-config-airbnb -D
yarn add eslint-plugin-import -D
yarn add eslint-plugin-jsx-a11y -D
yarn add eslint-plugin-react -D
```

### Configurações basica

---

#### Criar o arquivo .eslintrc.json

´´´
{
"parser": "babel-eslint",
"env": {
"es6": true
},
"extends": "airbnb",
"globals": {
"Atomics": "readonly",
"SharedArrayBuffer": "readonly"
},
"parserOptions": {
"ecmaFeatures": {
"jsx": true
},
"ecmaVersion": 2018,
"sourceType": "module"
},
"plugins": ["react"],
"rules": {
"react/jsx-filename-extension": [
"error",
{ "extensions": [".js", ".jsx"] }
],
"import/prefer-default-export": "off"
},
"settings": {
"import/resolver": {
"babel-plugin-root-import": { "rootPathSuffix": "src" }
}
}
}
´´´

#### Criar o arquivo .editorconfig

```
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
end_of_line = lf

```

#### Cirar o arquivo jsconfig.json

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["src/*"]
    }
  }
}

```

#### No arquivo babel.config.js adicionar as configurações abaixo

```
presets: [..., 'module:react-native-dotenv'],
plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
      },
    ],
  ],
  env: {
    production: {
      plugins: [
        'babel-plugin-root-import',
        {
          rootPathSuffix: 'src',
        },
      ],
    },
  },
```

#### Criar o arquivo .env passando o token do mapbox

```
TOKEN_MAPBOX=seutoken
```

### Configurando o Android

Vamos começar a configuração para Android no arquivo android/app/build.gradle ,
nele desça até perto do final e procure o objeto dependencies, dentro dele terão
algumas linhas começando pela palavra compile, dentro desse objeto, adicione o
seguinte trecho:

```
implementation project(':mapbox-react-native-mapbox-gl') {
  implementation ('com.squareup.okhttp3:okhttp:3.6.0') {
    force = true
  }
}
```

Abra agora o arquivo android/settings.gradle, e nele adicione no final as linhas:

```
include ':mapbox-react-native-mapbox-gl'
project(':mapbox-react-native-mapbox-gl').projectDir = new File(rootProject.projectDir, '../node_modules/@mapbox/react-native-mapbox-gl/android/rctmgl')
```

E agora pra finalizar, vamos fazer algumas modificações no arquivo android/app/src/main/java/com/<nome_do_projeto>/MainApplication.java, a primeira delas é adicionar a importação do Mapbox logo abaixo da importação do SoLoader, ficando assim:

```
...
import com.facebook.soloader.SoLoader;
import com.mapbox.rctmgl.RCTMGLPackage;
...
```

Feito isso falta apenas instanciar a classe do Mapbox e para isso procure o método getPackages, e dentro dele, logo abaixo da linha new MainReactPackage() adicione o seguinte código:

```
new RCTMGLPackage()
```
