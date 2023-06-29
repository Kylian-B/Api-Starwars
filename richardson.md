# REST : Richardson Maturity Model
Le modèle de maturité de Richardson (Richardson Maturity Model) est un modèle qui décompose l’approche REST en trois étapes qui introduisent progressivement les principaux éléments de REST (Ressources ; Verbes et Codes retours HTTP ; Contrôles hypermédia) pour passer d’un modèle RPC sur HTTP à un modèle RESTFul.

Le niveau 0 : Le RPC sur HTTP en POX (Plain Old XML).
Le niveau 1 : L’utilisation de ressources différentiées.
Le niveau 2 : L’utilisation des verbes et des codes retours HTTP.
Le niveau 3 : L’utilisation des contrôles hypermédia.


## Le niveau 0 : Le RPC sur HTTP en POX

Toutes les requêtes sont envoyées vers le même endpoint (la même URI) : /appointmentService. Elles sont complètement décrites dans le flux XML envoyé.


## Le niveau 1 : l’utilisation de ressources différenciées

Au niveau 1, les requêtes sont envoyées à des ressources individuelles.

Au niveau 1, l’introduction des ressources nous permet de gérer la complexité de notre système (de notre API de réservation) par l’approche « divide & conquer » : nous avons éclaté un service en plusieurs ressources.


## Le niveau 2 : L’utilisation des verbes et des codes retours HTTP

Dans REST, les ressources sont manipulées au travers d’un jeu de verbes simples. Le plus souvent les verbes HTTP pour la simple et bonne raison que la majeure partie des implémentations REST se fait sur HTTP.

L’idée est de tirer parti du protocole sur lequel nous nous appuyons. 

Pour rappel, HTTP définit GET comme une opération « sécurisée » qui n’induit aucun changement d’état côté serveur. Cette particularité présente deux avantages :

Les requêtes GET peuvent être invoquées autant de fois qu’on le souhaite dans n’importe quel ordre : la réponse à une requête sera toujours la même (sauf bien sûr si l’état de la ressource a été modifié par ailleurs).
Les résultats des requêtes GET peuvent être mis en cache par les différents équipements intervenant dans la chaîne de routage de la requête (dans un système comme celui de l’exemple déroulé par Martin Folwer, il conviendra évidement de régler correctement le « cache timeout »).

La requête de réservation d’un créneau est la même qu’au niveau 1 (en POST).

Les réponses retournées par le serveur sont les mêmes qu’au niveau 1 à l’exception du code retour utilisé :

Si la demande aboutie, le serveur retourne un code 201 Created : ce code réponse indique clairement qu’une nouvelle ressource a été créée.

Si la demande échoue, le serveur retourne un code 409 Conflict : ce code réponse indique clairement que la requête n’a pas aboutit en raison d’un conflit.  

Au niveau 2, l’utilisation des verbes et codes retours standards de HTTP nous permet de tirer pleinement parti du protocole sur lequel nous nous appuyons (« By following the rules of HTTP we’re able to take advantage of that capability. »).
Cette approche nous permet également d’éliminer les variantes dans la façon de traiter les choses et ainsi, de gérer des cas similaires de façon semblable dans l’ensemble de notre API.


## Le niveau 3 : L’utilisation des contrôles hypermédia

Le troisième et dernier niveau du Richardson Maturity Model introduit la notion de HATEOAS (Hypertext As The Engine Of Application State). Derrière cet acronyme barbare se cache un principe simple : les transitions possibles vers les états suivants sont fournies par des liens hypermédia.

Les requêtes sont les mêmes qu’au niveau 2, mais les réponses sont ici enrichies avec, pour chaque ressource, un élément link fournissant l’URI permettant de la manipuler.
  
Le premier avantage de l’utilisation des contrôles hypermédia est que les développeurs côté serveur peuvent refactorer les URI d’accès à l’API sans impacter les clients (pour autant que les clients utilisent les URI fournies par les éléments link).

D’autre part, l’utilisation des contrôles hypermédia permet d’auto-documenter l’API REST. Même si cette approche ne suffit pas à documenter complètement l’API, elle fournit un premier niveau d’information :

Elle aide les utilisateurs de l’API REST (les développeurs de clients) à explorer ses capacités : chaque réponse indique ce qu’il est possible de faire après en indiquant les ressources manipulables (on notera que les éléments link ne fournissent pas d’indication sur les verbes utilisables).
Elle permet aux développeurs de l’API de communiquer sur les nouvelles fonctionnalités en ajoutant de nouveaux éléments link dans les réponses.


# Perspectives

Le Richardson Maturity Model propose un fil conducteur permettant d’appréhender pas à pas les concepts sous-jacents à une approche RESTFul :

- Niveau 1 : Gérer la complexité de notre système via l’approche « divide & conquer » en introduisant la notion de ressource.
- Niveau 2 : Eliminer les variantes dans la façon de traiter les choses et de gérer des cas similaires de façon semblable en introduisant un jeu de verbes standards pour manipuler les ressources.
- Niveau 3 : Auto-documenter le protocole et fournir un premier niveau de découvrabilité au travers de la notion de HATEOAS.
