# BDD (Behavior Driven Development) sistema de normalização

O objetivo é documentar como o sistema de normalização deverá funcionar, normalizando pequenas frases, ou megabytes de textos, retornando o conteudo normalizado com base em uma série de regras descritas nesse documento.

## Cenários

### 1. Corretor ortográfico (vai ficar para a v2)

Dado/Quando for feita uma chamada da função
Então, o sistema deverá aplicar um corretor ortográfico em toda a base de dados, a fim de corrigir palavras com erro de ortografia

Exemplo
Entrada: `Você aepnas disse que era o preferido?`
Saída `Você apenas disse que era o preferido?`

### 2. Tudo para minusculas

Dado/Quando a etapa anterior for finalizada
Então o sistema deverá transformar toda a base de dados em minusculas

Exemplo
Entrada: `Você apenas disse que era o preferido?`
Saída `você apenas disse que era o preferido?`

### 3. Sem caracteres especiais, sem acentos e com um espaço.

Dado/Quando a etapa anterior for finalizada
Então o sistema deverá transformar toda a base de dados removendo todos os caracteres especiais diferentes de letras e números

Exemplo
Entrada: `você apenas disse que era  o preferido?`
Saída `voce apenas disse que era o preferido`

### 4. normalização de sinonimos

Dado\Quando a etapa anterior finalizada
Então com a base de dados já normalizada, o sistema deverá fazer com que todas as palavras tenha sinonimos em comun, exemplo, considerando predileto e favorito como sinonimos, no texto todo não deverá ter predileto, apenas favorito.

Exemplo
Entrada:`você apenas disse que era o preferido`
Saída `voce apenas disse que era o favorito`

## 5. normalização de semelhantes (vai ficar para uma v2)

Dado\Quando a etapa anterior finalizada
Então o chatbot deverá tratar toda a base de dados para textos como "me fale mais" e "informações sobre" sejam considerados iguais, e para facilitar, que a primeira frase seja removida e substituida pela segunda frase.

## 6. isolamento de step words

Dado\Quando a etapa anterior finalizada
Então o chatbot deverá isolar todos os stepworlds em uma lista a parte. Os steps worlds a considerão são esses abaixo, eles deverão ser normalizados pelas etapas 1, 2, 3, 4, 5 e 6:

a, acerca, adeus, agora, ainda, alem, algmas, algo, algumas, alguns, ali, além, ambas, ambos, ano, anos, antes, ao, aonde, aos, apenas, apoio, apontar, apos, após, aquela, aquelas, aquele, aqueles, aqui, aquilo, as, assim, através, atrás, até, aí, baixo, bastante, bem, boa, boas, bom, bons, breve, cada, caminho, catorze, cedo, cento, certamente, certeza, cima, cinco, coisa, com, como, comprido, conhecido, conselho, contra, contudo, corrente, cuja, cujas, cujo, cujos, custa, cá, da, daquela, daquelas, daquele, daqueles, dar, das, de, debaixo, dela, delas, dele, deles, demais, dentro, depois, desde, desligado, dessa, dessas, desse, desses, desta, destas, deste, destes, deve, devem, deverá, dez, dezanove, dezasseis, dezassete, dezoito, dia, diante, direita, dispoe, dispoem, diversa, diversas, diversos, diz, dizem, dizer, do, dois, dos, doze, duas, durante, dá, dão, dúvida, e, ela, elas, ele, eles, em, embora, enquanto, entao, entre, então, era, eram, essa, essas, esse, esses, esta, estado, estamos, estar, estará, estas, estava, estavam, este, esteja, estejam, estejamos, estes, esteve, estive, estivemos, estiver, estivera, estiveram, estiverem, estivermos, estivesse, estivessem, estiveste, estivestes, estivéramos, estivéssemos, estou, está, estás, estávamos, estão, eu, exemplo, falta, fará, favor, faz, fazeis, fazem, fazemos, fazer, fazes, fazia, faço, fez, fim, final, foi, fomos, for, fora, foram, forem, forma, formos, fosse, fossem, foste, fostes, fui, fôramos, fôssemos, geral, grande, grandes, grupo, ha, haja, hajam, hajamos, havemos, havia, hei, hoje, hora, horas, houve, houvemos, houver, houvera, houveram, houverei, houverem, houveremos, houveria, houveriam, houvermos, houverá, houverão, houveríamos, houvesse, houvessem, houvéramos, houvéssemos, há, hão, iniciar, inicio, ir, irá, isso, ista, iste, isto, já, lado, lhe, lhes, ligado, local, logo, longe, lugar, lá, maior, maioria, maiorias, mais, mal, mas, me, mediante, meio, menor, menos, meses, mesma, mesmas, mesmo, mesmos, meu, meus, mil, minha, minhas, momento, muito, muitos, máximo, mês, na, nada, nao, naquela, naquelas, naquele, naqueles, nas, nem, nenhuma, nessa, nessas, nesse, nesses, nesta, nestas, neste, nestes, no, noite, nome, nos, nossa, nossas, nosso, nossos, nova, novas, nove, novo, novos, num, numa, numas, nunca, nuns, não, nível, nós, número, o, obra, obrigada, obrigado, oitava, oitavo, oito, onde, ontem, onze, os, ou, outra, outras, outro, outros, para, parece, parte, partir, paucas, pegar, pela, pelas, pelo, pelos, perante, perto, pessoas, pode, podem, poder, poderá, podia, pois, ponto, pontos, por, porque, porquê, portanto, posição, possivelmente, posso, possível, pouca, pouco, poucos, povo, primeira, primeiras, primeiro, primeiros, promeiro, propios, proprio, própria, próprias, próprio, próprios, próxima, próximas, próximo, próximos, puderam, pôde, põe, põem, quais, qual, qualquer, quando, quanto, quarta, quarto, quatro, que, quem, quer, quereis, querem, queremas, queres, quero, questão, quieto, quinta, quinto, quinze, quáis, quê, relação, sabe, sabem, saber, se, segunda, segundo, sei, seis, seja, sejam, sejamos, sem, sempre, sendo, ser, serei, seremos, seria, seriam, será, serão, seríamos, sete, seu, seus, sexta, sexto, sim, sistema, sob, sobre, sois, somente, somos, sou, sua, suas, são, sétima, sétimo, só, tal, talvez, tambem, também, tanta, tantas, tanto, tarde, te, tem, temos, tempo, tendes, tenha, tenham, tenhamos, tenho, tens, tentar, tentaram, tente, tentei, ter, terceira, terceiro, terei, teremos, teria, teriam, terá, terão, teríamos, teu, teus, teve, tinha, tinham, tipo, tive, tivemos, tiver, tivera, tiveram, tiverem, tivermos, tivesse, tivessem, tiveste, tivestes, tivéramos, tivéssemos, toda, todas, todo, todos, trabalhar, trabalho, treze, três, tu, tua, tuas, tudo, tão, tém, têm, tínhamos, um, uma, umas, uns, usa, usar, vai, vais, valor, veja, vem, vens, ver, verdade, verdadeiro, vez, vezes, viagem, vindo, vinte, você, vocês, vos, vossa, vossas, vosso, vossos, vários, vão, vêm, vós, zero, à, às, área, é, éramos, és, último

Referência em: https://raw.githubusercontent.com/stopwords-iso/stopwords-pt/master/stopwords-pt.txt

Exemplo
Entrada:`você apenas disse que era o preferido`
Saída `disse favorito`
Stepwords: `apenas voce que era o`

Desta forma, as palavras mais relevantes deverão ficar separadas.

### Retornar conteudo tratado

Dado/Quando a etapa anterior for finalizada
Então, o conteudo normalizado deverá ser retornado.
