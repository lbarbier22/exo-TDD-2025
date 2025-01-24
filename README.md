# exo-TDD-2025

Le groupe était constitué de :
- BARBIER Lucas
- DEGRANDE Samuel

Voici les US que l'on a su noté :

    En tant qu'utilisateur, je souhaite pouvoir appliquer la TVA a un élément de panier

        Lorsque la catégorie de l’élément n’est pas renseignée, ne correspond pas à une catégorie existante ou nulle j’obtiens une erreur
        Lorsque le prix d’un élément est null, négatif ou non renseigné j’obtiens une erreur
        Lorsque la catégorie et le prix de l’élément du panier sont renseignés, j’obtiens le bon montant final avec TVA appliquée

    En tant qu'utilisateur, je souhaite pouvoir calculer le prix total de mon panier TVA inclue

        Lorsque la catégorie d’un élément du panier n’est pas renseignée ou nulle j’obtiens une erreur
        Lorsque la quantité d’un élément du panier n’est pas renseignée, nulle ou négative j’obtiens une erreur
        Lorsque le prix d’un élément du panier n’est pas renseigné ou null ou négatif, j’obtiens une erreur
        Lorsque la catégorie, la quantité et le prix de tous les éléments du panier sont renseignés, j’obtiens le bon montant final TTC


    En tant qu’utilisateur, je souhaite connaître les frais de livraison en fonction du total de mon panier
	    
        Lorsque le total de mon panier est inférieur à 50 euros, alors les frais de livraison sont de 10 euros.
	    Lorsque le total de mon panier est compris entre 50 et 99,99 euros, alors les frais de livraison sont de 5 euros.
	    Lorsque le total de mon panier est supérieur ou égal à 100 euros, alors la livraison est gratuite.

    En tant qu’utilisateur, je souhaite que les frais de livraison prennent en compte les réductions appliquées au panier
	    
        Lorsque j’applique la TVA qui augmente le total du panier, alors les frais de livraison sont recalculés en fonction du nouveau montant.
