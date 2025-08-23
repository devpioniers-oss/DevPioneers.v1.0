import React from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

const Devis = () => {
  const [searchParams] = useSearchParams();
  const selectedPack = searchParams.get("pack");
   //mapping pack préselectionner
   const packMapping = {
    vitrine: "site vitrine",
    e_commerce: "site E-commerce",
    application: "Application web"
   }
  // Animation commune
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="mt-32 mb-20 flex-grow min-h-screen flex items-center justify-center bg-blue-600 px-6 py-12 rounded-xl shadow-lg">
      <div className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-white text-center text-4xl"
        >
          <h1>Formulaire de demande de Devis</h1>
          <hr className="font-extrabold mt-10" />
        </motion.div>

        <form action="" method="post" className="max-w-3xl mx-auto p-6 space-y-16">
          
          {/* Services choisis */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <label htmlFor="services" className="block text-white mb-2 text-2xl font-bold">
              Services Choisis
            </label>
            <select
              name="services"
              defaultValue={packMapping[selectedPack] || ""}
              className="w-full border rounded-lg px-5 py-3 text-black"
            >
              <option value="">Sélectionner un service</option>
              <option value="site vitrine">Site vitrine</option>
              <option value="site E-commerce">Site E-commerce</option>
              <option value="Application web">Application web</option>
            </select>
          </motion.div>

          {/* Infos utilisateur */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-white mt-4"
          >
            <div className="mb-5 flex gap-4">
              <input type="text" placeholder="Votre nom" name="nom" className="border rounded-xl px-5 border-white py-3 w-1/2" />
              <input type="text" placeholder="Votre prénom" name="prenom" className="border rounded-xl px-5 border-white py-3 w-1/2" />
            </div>
            <div className="flex flex-col space-y-4">
              <input type="email" placeholder="Votre email" className="border rounded-lg border-white px-6 py-3" />
              <input type="tel" placeholder="Votre téléphone" className="border rounded-lg border-white px-6 py-3" />
              <input type="text" placeholder="Nom de votre entreprise" className="border rounded-lg border-white px-6 py-3" />
              <input type="text" placeholder="Secteur d’activité" className="border rounded-lg border-white px-6 py-3" />
            </div>
          </motion.div>

          {/* Fonctionnalités souhaitées */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col space-y-4 mt-10"
          >
            <h1 className="text-center text-white text-2xl font-bold">Fonctionnalités souhaitées</h1>
            <label><input type="checkbox" /> Design personnalisé</label>
            <label><input type="checkbox" /> Responsive (mobile/tablette)</label>
            <label><input type="checkbox" /> Intégration des réseaux sociaux</label>
            <label><input type="checkbox" /> Optimisation SEO</label>
            <label><input type="checkbox" /> Multilingue</label>
            <label><input type="checkbox" /> Sauvegarde et restauration</label>
          </motion.div>

          {/* Fonctionnalités commerciales */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col space-y-4 mt-10"
          >
            <h1 className="text-white text-2xl font-bold text-center">Fonctionnalités commerciales</h1>
            <label><input type="checkbox" /> Gestion de catalogue</label>
            <label><input type="checkbox" /> Panier d’achat</label>
            <label><input type="checkbox" /> Paiement en ligne sécurisé</label>
            <label><input type="checkbox" /> Gestion des commandes</label>
            <label><input type="checkbox" /> Espace client</label>
            <label><input type="checkbox" /> Gestion des abonnements</label>
            <label><input type="checkbox" /> Promotions & codes promo</label>
          </motion.div>

          {/* Intégrations & Techniques */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col space-y-4 mt-10"
          >
            <h1 className="text-white text-2xl font-bold text-center">Intégrations & Techniques</h1>
            <label><input type="checkbox" /> Intégration CRM</label>
            <label><input type="checkbox" /> Intégration ERP</label>
            <label><input type="checkbox" /> API personnalisée</label>
            <label><input type="checkbox" /> Newsletter</label>
            <label><input type="checkbox" /> Authentification Google/Facebook</label>
            <label><input type="checkbox" /> Paiement Stripe / PayPal</label>
            <label><input type="checkbox" /> Chat en ligne</label>
          </motion.div>

          {/* Référencement */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col space-y-4 mt-10"
          >
            <h1 className="text-white text-2xl font-bold text-center">Référencement & Visibilité</h1>
            <label><input type="checkbox" /> SEO technique</label>
            <label><input type="checkbox" /> Rédaction de contenu</label>
            <label><input type="checkbox" /> Google Ads</label>
            <label><input type="checkbox" /> Facebook/Instagram Ads</label>
            <label><input type="checkbox" /> Google Analytics</label>
            <label><input type="checkbox" /> Suivi du référencement</label>
            <label><input type="checkbox" /> Stratégie réseaux sociaux</label>
          </motion.div>

          {/* Maintenance */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col space-y-4 mt-10"
          >
            <h1 className="text-white text-2xl font-bold text-center">Maintenance & Support</h1>
            <label><input type="checkbox" /> Support 24/7</label>
            <label><input type="checkbox" /> Mises à jour régulières</label>
            <label><input type="checkbox" /> Sauvegardes automatiques</label>
            <label><input type="checkbox" /> Surveillance de sécurité</label>
            <label><input type="checkbox" /> Formation utilisateurs</label>
            <label><input type="checkbox" /> Assistance email</label>
            <label><input type="checkbox" /> Assistance téléphonique</label>
          </motion.div>

          {/* Hébergement */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col space-y-4 mt-10"
          >
            <h1 className="text-white text-2xl font-bold text-center">Hébergement & Nom de domaine</h1>
            <label><input type="checkbox" /> Nom de domaine inclus</label>
            <label><input type="checkbox" /> Hébergement mutualisé</label>
            <label><input type="checkbox" /> Hébergement VPS</label>
            <label><input type="checkbox" /> Certificat SSL</label>
            <label><input type="checkbox" /> Adresse email pro</label>
            <label><input type="checkbox" /> CDN</label>
            <label><input type="checkbox" /> Sauvegardes serveur</label>
          </motion.div>

          {/* Délais & budget */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col space-y-7 mt-10"
          >
            <h1 className="text-white text-2xl font-bold text-center">Délai et budget</h1>
            <div>
              <label className="text-white text-lg font-bold">Date souhaitée de livraison :</label>
              <br />
              <input type="date" name="livraison" className="border border-white px-6 py-3 rounded-lg mt-2" />
            </div>
            <div className="flex flex-col gap-4 text-center">
              <h2 className="text-white text-lg font-bold">Commentaires ou besoins spécifiques</h2>
              <textarea placeholder="Soumettez vos besoins spécifiques" className="border border-white px-5 py-5 rounded-xl h-[20vh] resize-none" />
            </div>
            <div className="item-center justify-center flex">
              <input type="submit" value="Envoyer" className="bg-blue-500 border-white text-white px-5 py-4 text-3xl rounded-lg w-98" />
            </div>
          </motion.div>

        </form>
      </div>
    </section>
  );
};

export default Devis;
