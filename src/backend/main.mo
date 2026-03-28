import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";

actor {
  type CandleCollection = {
    id : Nat;
    name : Text;
    color : Text;
    description : Text;
    icon : Text;
  };

  type CandleProduct = {
    id : Nat;
    collectionId : Nat;
    name : Text;
    description : Text;
    priceCents : Nat;
    image : Text;
  };

  let collections : [CandleCollection] = [
    {
      id = 1;
      name = "Daisy";
      color = "#FDE68A";
      description = "Fresh and light, inspired by the beauty of daisies.";
      icon = "daisy";
    },
    {
      id = 2;
      name = "Sunflower";
      color = "#FBBF24";
      description = "Bold and sunny, capturing the essence of sunflowers.";
      icon = "sunflower";
    },
    {
      id = 3;
      name = "Tulip";
      color = "#F472B6";
      description = "Elegant and colorful, reminiscent of tulip fields.";
      icon = "tulip";
    },
    {
      id = 4;
      name = "Lotus";
      color = "#A7F3D0";
      description = "Tranquil and calming, inspired by the lotus flower.";
      icon = "lotus";
    },
    {
      id = 5;
      name = "Rose";
      color = "#F87171";
      description = "Timeless and romantic, capturing the fragrance of roses.";
      icon = "rose";
    },
    {
      id = 6;
      name = "Teddy";
      color = "#FBBF24";
      description = "Whimsical and playful, perfect for cozy spaces.";
      icon = "teddy";
    },
    {
      id = 7;
      name = "Urli";
      color = "#BFDBFE";
      description = "Traditional and elegant, inspired by Indian decor.";
      icon = "urli";
    },
    {
      id = 8;
      name = "Ocean";
      color = "#60A5FA";
      description = "Refreshing and invigorating, reminiscent of the sea.";
      icon = "ocean";
    },
    {
      id = 9;
      name = "Scandinavian";
      color = "#F3F4F6";
      description = "Minimalistic and modern, with clean lines and soft hues.";
      icon = "scandinavian";
    },
    {
      id = 10;
      name = "Evil Eye";
      color = "#2563EB";
      description = "Protective and stylish, inspired by ancient symbols.";
      icon = "evil_eye";
    },
    {
      id = 11;
      name = "Zodiac";
      color = "#818CF8";
      description = "Personalized and mystical, tailored to each sign.";
      icon = "zodiac";
    },
    {
      id = 12;
      name = "Crystals";
      color = "#6EE7B7";
      description = "Healing and spiritual, infused with crystal energy.";
      icon = "crystals";
    },
    {
      id = 13;
      name = "Food";
      color = "#FDBA74";
      description = "Delicious and comforting, inspired by favorite treats.";
      icon = "food";
    },
  ];

  let products : [CandleProduct] = [
    // DAISY
    {
      id = 1;
      collectionId = 1;
      name = "Morning Dew";
      description = "A refreshing scent that captures the essence of fresh morning air.";
      priceCents = 1999;
      image = "daisy_morning_dew.jpg";
    },
    {
      id = 2;
      collectionId = 1;
      name = "Spring Meadow";
      description = "Floral notes with a hint of citrus, perfect for springtime.";
      priceCents = 2499;
      image = "daisy_spring_meadow.jpg";
    },
    {
      id = 3;
      collectionId = 1;
      name = "Pure Blossoms";
      description = "Light and airy fragrance, inspired by blooming daisies.";
      priceCents = 2299;
      image = "daisy_pure_blossoms.jpg";
    },

    // SUNFLOWER
    {
      id = 4;
      collectionId = 2;
      name = "Golden Hour";
      description = "Warm and sunny, with hints of vanilla and honey.";
      priceCents = 2199;
      image = "sunflower_golden_hour.jpg";
    },
    {
      id = 5;
      collectionId = 2;
      name = "Sunshine Bliss";
      description = "Bright citrus notes paired with floral undertones.";
      priceCents = 2699;
      image = "sunflower_sunshine_bliss.jpg";
    },
    {
      id = 6;
      collectionId = 2;
      name = "Harvest Glow";
      description = "A comforting blend of spices and sunflower essence.";
      priceCents = 2399;
      image = "sunflower_harvest_glow.jpg";
    },

    // TULIP
    {
      id = 7;
      collectionId = 3;
      name = "Tulip Fields";
      description = "Rich floral aroma with a touch of sweetness.";
      priceCents = 2099;
      image = "tulip_fields.jpg";
    },
    {
      id = 8;
      collectionId = 3;
      name = "Blushing Petals";
      description = "Delicate and romantic, perfect for relaxation.";
      priceCents = 2599;
      image = "tulip_blushing_petals.jpg";
    },
    {
      id = 9;
      collectionId = 3;
      name = "Elegant Bouquet";
      description = "Sophisticated fragrance blend with tulip accents.";
      priceCents = 2799;
      image = "tulip_elegant_bouquet.jpg";
    },

    // LOTUS
    {
      id = 10;
      collectionId = 4;
      name = "Serenity";
      description = "Calming lotus scent with herbal undertones.";
      priceCents = 2499;
      image = "lotus_serenity.jpg";
    },
    {
      id = 11;
      collectionId = 4;
      name = "Tranquil Waters";
      description = "A refreshing blend of lotus and aquatic notes.";
      priceCents = 2899;
      image = "lotus_tranquil_waters.jpg";
    },
    {
      id = 12;
      collectionId = 4;
      name = "Peaceful Bloom";
      description = "Subtle lotus fragrance for a peaceful ambiance.";
      priceCents = 2199;
      image = "lotus_peaceful_bloom.jpg";
    },

    // ROSE
    {
      id = 13;
      collectionId = 5;
      name = "Romantic Escape";
      description = "Classic rose scent with a hint of vanilla.";
      priceCents = 2599;
      image = "rose_romantic_escape.jpg";
    },
    {
      id = 14;
      collectionId = 5;
      name = "Velvet Petals";
      description = "Soft and luxurious fragrance blend.";
      priceCents = 2999;
      image = "rose_velvet_petals.jpg";
    },
    {
      id = 15;
      collectionId = 5;
      name = "Blooming Love";
      description = "A timeless blend of roses and floral notes.";
      priceCents = 2799;
      image = "rose_blooming_love.jpg";
    },

    // TEDDY
    {
      id = 16;
      collectionId = 6;
      name = "Cozy Comfort";
      description = "Warm and inviting scent for relaxing spaces.";
      priceCents = 1899;
      image = "teddy_cozy_comfort.jpg";
    },
    {
      id = 17;
      collectionId = 6;
      name = "Snuggle Time";
      description = "Soft and soothing fragrance, perfect for bedtime.";
      priceCents = 2099;
      image = "teddy_snuggle_time.jpg";
    },
    {
      id = 18;
      collectionId = 6;
      name = "Playful Dreams";
      description = "Fun and whimsical scent for children's rooms.";
      priceCents = 1999;
      image = "teddy_playful_dreams.jpg";
    },

    // URLI
    {
      id = 19;
      collectionId = 7;
      name = "Traditional Charm";
      description = "Classic Indian fragrances with a modern twist.";
      priceCents = 2799;
      image = "urli_traditional_charm.jpg";
    },
    {
      id = 20;
      collectionId = 7;
      name = "Royal Blossoms";
      description = "Luxurious blend of flowers and spices.";
      priceCents = 3199;
      image = "urli_royal_blossoms.jpg";
    },
    {
      id = 21;
      collectionId = 7;
      name = "Festive Glow";
      description = "Perfect for celebrations and special occasions.";
      priceCents = 2999;
      image = "urli_festive_glow.jpg";
    },

    // OCEAN
    {
      id = 22;
      collectionId = 8;
      name = "Sea Breeze";
      description = "Crisp and refreshing ocean-inspired scent.";
      priceCents = 2399;
      image = "ocean_sea_breeze.jpg";
    },
    {
      id = 23;
      collectionId = 8;
      name = "Coastal Waves";
      description = "A blend of aquatic and floral notes.";
      priceCents = 2599;
      image = "ocean_coastal_waves.jpg";
    },
    {
      id = 24;
      collectionId = 8;
      name = "Beach Retreat";
      description = "Relaxing scent, perfect for unwinding.";
      priceCents = 2799;
      image = "ocean_beach_retreat.jpg";
    },

    // SCANDINAVIAN
    {
      id = 25;
      collectionId = 9;
      name = "Nordic Nights";
      description = "Cool and sophisticated fragrance blend.";
      priceCents = 2899;
      image = "scandinavian_nordic_nights.jpg";
    },
    {
      id = 26;
      collectionId = 9;
      name = "Hygge Haven";
      description = "Warm and comforting, inspired by Scandinavian coziness.";
      priceCents = 2599;
      image = "scandinavian_hygge_haven.jpg";
    },
    {
      id = 27;
      collectionId = 9;
      name = "Minimalist Bloom";
      description = "Simple yet elegant floral fragrance.";
      priceCents = 2299;
      image = "scandinavian_minimalist_bloom.jpg";
    },

    // EVIL EYE
    {
      id = 28;
      collectionId = 10;
      name = "Protective Aura";
      description = "Unique blend of spices and floral notes.";
      priceCents = 2799;
      image = "evil_eye_protective_aura.jpg";
    },
    {
      id = 29;
      collectionId = 10;
      name = "Mystic Charm";
      description = "Enchanting fragrance, perfect for meditation.";
      priceCents = 2999;
      image = "evil_eye_mystic_charm.jpg";
    },
    {
      id = 30;
      collectionId = 10;
      name = "Serene Energy";
      description = "Calming scent for a peaceful atmosphere.";
      priceCents = 2699;
      image = "evil_eye_serene_energy.jpg";
    },

    // ZODIAC
    {
      id = 31;
      collectionId = 11;
      name = "Aries Flame";
      description = "Bold and fiery scent, inspired by Aries energy.";
      priceCents = 2899;
      image = "zodiac_aries_flame.jpg";
    },
    {
      id = 32;
      collectionId = 11;
      name = "Cancer Comfort";
      description = "Soft and nurturing fragrance, perfect for Cancer signs.";
      priceCents = 3199;
      image = "zodiac_cancer_comfort.jpg";
    },
    {
      id = 33;
      collectionId = 11;
      name = "Pisces Dreams";
      description = "Dreamy and relaxing scent for Pisces personalities.";
      priceCents = 2999;
      image = "zodiac_pisces_dreams.jpg";
    },

    // CRYSTALS
    {
      id = 34;
      collectionId = 12;
      name = "Amethyst Calm";
      description = "Soothing lavender scent with calming properties.";
      priceCents = 2699;
      image = "crystals_amethyst_calm.jpg";
    },
    {
      id = 35;
      collectionId = 12;
      name = "Rose Quartz Love";
      description = "Romantic blend of rose and vanilla fragrances.";
      priceCents = 2999;
      image = "crystals_rose_quartz_love.jpg";
    },
    {
      id = 36;
      collectionId = 12;
      name = "Citrine Energy";
      description = "Energizing citrus scent for a positive mood.";
      priceCents = 2799;
      image = "crystals_citrine_energy.jpg";
    },

    // FOOD
    {
      id = 37;
      collectionId = 13;
      name = "Vanilla Bean";
      description = "Rich and creamy vanilla fragrance.";
      priceCents = 2099;
      image = "food_vanilla_bean.jpg";
    },
    {
      id = 38;
      collectionId = 13;
      name = "Chocolate Truffle";
      description = "Decadent chocolate scent, perfect for sweet lovers.";
      priceCents = 2399;
      image = "food_chocolate_truffle.jpg";
    },
    {
      id = 39;
      collectionId = 13;
      name = "Caramel Delight";
      description = "Warm and comforting caramel fragrance.";
      priceCents = 2199;
      image = "food_caramel_delight.jpg";
    },
  ];

  public query ({ caller }) func getAllCollections() : async [CandleCollection] {
    collections;
  };

  public query ({ caller }) func getProductsByCollectionId(collectionId : Nat) : async [CandleProduct] {
    products.filter(func(p) { p.collectionId == collectionId });
  };

  public query ({ caller }) func getProductById(productId : Nat) : async CandleProduct {
    switch (products.find(func(p) { p.id == productId })) {
      case (null) { Runtime.trap("Product not found") };
      case (?product) { product };
    };
  };
};
