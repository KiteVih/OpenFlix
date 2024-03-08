import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useState } from 'react';
import Header from './Header.js';
export default function Corpo() {
  const [tela, setTela] = useState(1);
  const VoltarHome = () => {
    setTela(1);
  };
  const homemAranha = () => {
    setTela(2);
  };
  const justiceiro = () => {
    setTela(3);
  };
  const forcag = () => {
    setTela(4);
  };
  const gentegrande = () => {
    setTela(5);
  };
  const invocacao = () => {
    setTela(6);
  };
  const exorcista = () => {
    setTela(7);
  };
  const creditos = () => {
    setTela(8);
  };
  const Creditos = (
    <View style={styles.container3}>
      <Text style={styles.creditos}>Desenvolvimento: Victor Ramos e Laís Liborio</Text>
      <Text style={styles.creditos}>Professor Rogério (Programação para Aplicativos Mobile)</Text>
      <Text style={styles.creditos}> Desenvolvimento de Sistemas - 2024</Text>
    </View>
  );
  const Home = (
    <View style={{ marginTop: '2%' }}>
      <ScrollView>
        <View style={styles.filmes}>
          <Text style={styles.texto}>FILMES DE AÇÃO</Text>
          <View style={styles.filme}>
            <TouchableOpacity onPress={homemAranha}>
              <Image
                style={styles.cartaz}
                source={require('../assets/homem_aranha_cartaz.jpeg')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={justiceiro}>
              <Image
                style={styles.cartaz}
                source={require('../assets/punisher_cartaz.jpg')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.filmes}>
          <Text style={styles.texto}>FILMES DE COMÉDIA</Text>
          <View style={styles.filme}>
            <TouchableOpacity onPress={forcag}>
              <Image
                style={styles.cartaz}
                source={require('../assets/FORCA_G_CARTAZ.jpg')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={gentegrande}>
              <Image
                style={styles.cartaz}
                source={require('../assets/gentegrande.webp')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.filmes}>
          <Text style={styles.texto}>FILMES DE TERROR</Text>
          <View style={styles.filme}>
            <TouchableOpacity onPress={invocacao}>
              <Image
                style={styles.cartaz}
                source={require('../assets/invocacao_cartaz.jpg')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={exorcista}>
              <Image
                style={styles.cartaz}
                source={require('../assets/exorcista.jfif')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity style={styles.btn} onPress={creditos}>
            <Text style={styles.cred}>Creditos</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
  const HomemAranha = (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.filmeDesc}>
            <Text style={styles.titulo}>Homem Aranha 2</Text>
            <Image
              style={styles.Cartaz}
              source={require('../assets/homem_aranha_cartaz.jpeg')}
            />
            <Text style={styles.Desc}>
              Em Homem-Aranha 2, após derrotar o Duende Verde, a vida de Peter
              Parker (Tobey Maguire) muda por completo. Temendo que Mary Jane
              (Kirsten Dunst) sofra algum risco por ser ele o Homem-Aranha,
              Peter continua escondendo o amor que sente e se mantém longe dela.
              Ao mesmo tempo precisa lidar com Harry (James Franco), seu melhor
              amigo, cuja raiva pelo Homem-Aranha aumenta cada vez mais por
              considerá-lo como sendo o assassino de seu pai. Além disso sua tia
              May (Rosemary Harris) passa por uma fase difícil após a morte de
              seu tio Ben, estranhando também o comportamento do sobrinho.
              Enquanto precisa lidar com seus problemas particulares Peter
              recebe ainda uma má notícia: o surgimento do Dr. Octopus (Alfred
              Molina), um homem que possui tentáculos presos ao corpo.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
  const Justiceiro = (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.filmeDesc}>
            <Text style={styles.titulo}>O justiceiro</Text>
            <Image
              style={styles.Cartaz}
              source={require('../assets/punisher_cartaz.jpg')}
            />
            <Text style={styles.Desc}>
              Após ter sua esposa e filho assassinados, Frank Castle (Thomas
              Jane) decidiu por dedicar sua vida a eliminar o crime das ruas da
              cidade em que vive. Para tanto Castle não apenas persegue os
              bandidos como também os elimina, usando para tanto sua experiência
              como agente secreto do FBI. Seu novo alvo é Howard Saint (John
              Travolta), um homem ligado ao submundo do crime que decide se
              vingar da sociedade após ter seu filho morto.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
  const FORCAG = (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.filmeDesc}>
            <Text style={styles.titulo}>Força G</Text>
            <Image
              style={styles.Cartaz}
              source={require('../assets/FORCA_G_CARTAZ.jpg')}
            />
            <Text style={styles.Desc}>
              Durante mais de cem anos o governo norte-americano treinou e
              espalhou animais como agentes espiões. Agora o avanço da
              tecnologia permitiu que fosse criada uma equipe espiã disfarçada,
              chamada Força G, composta apenas por animais. Contando com o que
              há de mais moderno em equipamentos de espionagem, o grupo é
              liderado pelo porquinho-da-índia Darwin (Sam Rockwell) e composto
              ainda pelos também porquinhos-da-índia Blaster (Tracy Morgan) e
              Juarez (Penélope Cruz) e ainda a toupeira Speckles (Nicolas Cage).
              Juntos eles precisam deter os planos de um ambicioso bilionário,
              que deseja dominar o mundo através de eletrodomésticos.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
  const GENTEGRANDE = (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.filmeDesc}>
            <Text style={styles.titulo}>Gente Grande</Text>
            <Image
              style={styles.Cartaz}
              source={require('../assets/gentegrande.webp')}
            />
            <Text style={styles.Desc}>
              Em Gente Grande, Lenny (Adam Sandler), Kurt (Chris Rock), Eric
              (Kevin James), Marcus (David Spade) e Rob (Rob Schneider) se
              conhecem desde pequenos. Passados trinta anos, os cinco amigos se
              reencontram para curtir um fim de semana juntos com as respectivas
              famílias, mas o feriado de 4 de Julho em uma casa no lago promete
              muito mais diversão do que apenas lembranças dos bons momentos.
              Casados e com várias crianças, os homens de família terão de
              confrontar o fato de não serem mais tão jovens.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
  const INVOCACAO = (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.filmeDesc}>
            <Text style={styles.titulo}>Invocação do Mal</Text>
            <Image
              style={styles.Cartaz}
              source={require('../assets/invocacao_cartaz.jpg')}
            />
            <Text style={styles.Desc}>
              Harrisville, Estados Unidos. Um casal (Ron Livinston e Lili
              Taylor) muda para uma casa nova ao lado de suas cinco filhas.
              Inexplicavelmente, estranhos acontecimentos começam a assustar as
              crianças, o pai e, principalmente, a mãe. Preocupada com algumas
              manchas que aparecem em seu corpo e com uma sequência de sustos
              que levou, ela decide procurar um famoso casal de investigadores
              paranormais (Patrick Wilson e Vera Farmiga), mas eles não aceitam
              o convite, acreditando ser somente mais um engano de pessoas
              apavoradas com canos que fazem barulhos durante a noite ou coisas
              do gênero. Porém, quando eles aceitam fazer uma visita ao local,
              descobrem que algo muito poderoso e do mal reside ali. Agora, eles
              precisam descobrir o que é e o porquê daquilo tudo acontecendo com
              os membros daquela família. É quando o passado começa a revelar
              uma entidade demoníaca querendo continuar sua trajetória de
              maldades.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
  const EXORCISTA = (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.filmeDesc}>
            <Text style={styles.titulo}>O Exorcista</Text>
            <Image
              style={styles.Cartaz}
              source={require('../assets/exorcista.jfif')}
            />
            <Text style={styles.Desc}>
              OEm Georgetown, Washington, uma atriz vai gradativamente tomando
              consciência que a sua filha de doze anos está tendo um
              comportamento completamente assustador. Deste modo, ela pede ajuda
              a um padre, que também um psiquiatra, e este chega a conclusão de
              que a garota está possuída pelo demônio. Ele solicita então a
              ajuda de um segundo sacerdote, especialista em exorcismo, para
              tentar livrar a menina desta terrível possessão.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
  return (
    <View style={{ marginTop: '2%' }}>
      <Header setTela={setTela} />
      {tela == 1 ? Home : null } 
      {tela == 2 ? HomemAranha : null}
      {tela == 3 ? Justiceiro : null}
      {tela == 4 ? FORCAG : null}
      {tela == 5 ? GENTEGRANDE : null}
      {tela == 6 ? INVOCACAO : null}
      {tela == 7 ? EXORCISTA : null}
      {tela == 8 ? Creditos : null}
    </View>
  );
}

const styles = StyleSheet.create({
  filmes: {
    backgroundColor: 'black',
    width: 'auto',
    height: 230,
    alignItems: 'left',
    marginTop: '2%',
  },
  texto: {
    color: 'red',
    textAlign: 'left',
    fontFamily: 'cursive ',
    fontSize: 16,
  },
  filme: {
    flexDirection: 'row',
    columnGap: 6,
  },
  cartaz: {
    marginTop: 6,
    width: 160,
    height: 200,
    resizeMode: 'stretch',
    borderRadius: 5,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  Cartaz: {
    width: 200,
    height: 230,
    resizeMode: 'stretch',
    borderRadius: 5,
    marginTop: 10,
  },
  titulo: {
    color: 'white',
    fontSize: 30,
  },
  filmeDesc: {
    marginTop: 25,
    alignItems: 'center',
  },
  Desc: {
    marginTop: 20,
    color: 'white',
    fontSize: 15,
    width: 300,
  },
  cred: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  btn: {
    borderRadius: 20,
    backgroundColor: 'red',
    width: 140,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    marginTop: 20,
    alignItems: 'center',
  },
  creditos:{
    fontSize:20,
    color:'white',
    justifyContent:'center',
    alignItems:'center'
  },
  container3:{
    marginTop:300,
    justifyContent:'center',
    alignItems:'center'
  }
});
