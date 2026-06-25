var simplemaps_usmap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#000",
    popups: "on_click",
    
    //State defaults
    state_description: "State Description",
    state_color: "#f8f6e8",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: "2",
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Add location markers using latitude and longitude!",
    location_color: "#2041D4",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#20428c",
    label_hover_color: "#000",
    label_size: 22,
  label_font: "Josefin Slab",
    hide_labels: "no",
    hide_eastern_labels: "no",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
  popup_font: "12px/1.5 'Josefin Slab', serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "yes",
    images_directory: "/static/lib/simplemaps/map_images/",
    fade_time: 0.1,
    import_labels: "no",
    link_text: "View Website",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    HI: {
      name: "Hawaii",
      color: "#ab6d21",
      description: "<h4>Heidi Johnson</h4>\n<a href=\"tel:+763-286-0476\">763-286-0476</a>\n<a href=\"mailto:heidi@paesauthor.com\">heidi@paesauthor.com</a>",
      zoomable: "no"
    },
    AK: {
      name: "Alaska",
      description: "<a href=\"tel:+805-286-7513\">805-286-7513</a>\n<a href=\"mailto:sales@paesauthor.com\">sales@paesauthor.com</a>",
      zoomable: "no"
    },
    FL: {
      name: "Florida",
      color: "#3399cc",
      description: "<h4>Megan Donovan</h4>\n<a href=\"tel:+904-838-1573\">904-838-1573</a>\n<a href=\"mailto:megan@paesauthor.com\">megan@paesauthor.com</a>",
      zoomable: "no"
    },
    NH: {
      name: "New Hampshire",
      description: "<a href=\"tel:+805-286-7513\">805-286-7513</a>\n<a href=\"mailto:sales@paesauthor.com\">sales@paesauthor.com</a>",
      zoomable: "no"
    },
    VT: {
      name: "Vermont",
      description: "<a href=\"tel:+805-286-7513\">805-286-7513</a>\n<a href=\"mailto:sales@paesauthor.com\">sales@paesauthor.com</a>",
      zoomable: "no"
    },
    ME: {
      name: "Maine",
      description: "<a href=\"tel:+805-286-7513\">805-286-7513</a>\n<a href=\"mailto:sales@paesauthor.com\">sales@paesauthor.com</a>",
      zoomable: "no"
    },
    RI: {
      name: "Rhode Island",
      color: "#99cc33",
      description: "<h4>Rachel Bricker</h4>\n<a href=\"tel:+814-449-9300\">814-449-9300</a>\n<a href=\"mailto:rachel@paesauthor.com\">rachel@paesauthor.com</a>\n\n<h4>Kathi George</h4>\n<a href=\"tel:+814-323-0852\">814-323-0852</a>\n<a href=\"mailto:kathi@paesauthor.com\">kathi@paesauthor.com</a>",
      zoomable: "no"
    },
    NY: {
      name: "New York",
      color: "#ffc700",
      description: "<h4>Tom Knapp</h4>\n<a href=\"tel:+315-404-8377\">315-404-8377</a>\n<a href=\"mailto:tom@paesauthor.com\">tom@paesauthor.com</a>",
      zoomable: "no"
    },
    PA: {
      name: "Pennsylvania",
      color: "#006699",
      description: "<h4>Leigh Dennick</h4>\n<a href=\"tel:+412-260-3384\">412-260-3384</a>\n<a href=\"mailto:leigh@paesauthor.com\">leigh@paesauthor.com</a>",
      zoomable: "no"
    },
    NJ: {
      name: "New Jersey",
      color: "#ffc700",
      description: "<h4>Tom Knapp</h4>\n<a href=\"tel:+315-404-8377\">315-404-8377</a>\n<a href=\"mailto:tom@paesauthor.com\">tom@paesauthor.com</a>",
      zoomable: "no"
    },
    DE: {
      name: "Delaware",
      color: "#ffc700",
      description: "<h4>Tom Knapp</h4>\n<a href=\"tel:+315-404-8377\">315-404-8377</a>\n<a href=\"mailto:tom@paesauthor.com\">tom@paesauthor.com</a>",
      zoomable: "no"
    },
    MD: {
      name: "Maryland",
      color: "#ffc700",
      description: "<h4>Tom Knapp</h4>\n<a href=\"tel:+315-404-8377\">315-404-8377</a>\n<a href=\"mailto:tom@paesauthor.com\">tom@paesauthor.com</a>",
      zoomable: "no"
    },
    VA: {
      name: "Virginia",
      color: "#b9e5fb",
      description: "<h4>CJ Hirschman</h4>\n<a href=\"tel:+843-732-1653\">843-732-1653</a>\n<a href=\"mailto:cj@paesauthor.com\">cj@paesauthor.com</a>",
      zoomable: "no"
    },
    WV: {
      name: "West Virginia",
      color: "#861c80",
      description: "<h4>Tanner Amaral</h4>\n<a href=\"tel:+805-904-3656\">805-904-3656</a>\n<a href=\"mailto:tanner@paesauthor.com\">tanner@paesauthor.com</a>",
      zoomable: "no"
    },
    OH: {
      name: "Ohio",
      color: "#99cc33",
      description: "<h4>Rachel Bricker</h4>\n<a href=\"tel:+814-449-9300\">814-449-9300</a>\n<a href=\"mailto:rachel@paesauthor.com\">rachel@paesauthor.com</a>\n\n<h4>Kathi George</h4>\n<a href=\"tel:+814-323-0852\">814-323-0852</a>\n<a href=\"mailto:kathi@paesauthor.com\">kathi@paesauthor.com</a>",
      zoomable: "no"
    },
    IN: {
      name: "Indiana",
      color: "#006699",
      description: "<h4>Leigh Dennick</h4>\n<a href=\"tel:+412-260-3384\">412-260-3384</a>\n<a href=\"mailto:leigh@paesauthor.com\">leigh@paesauthor.com</a>",
      zoomable: "no"
    },
    IL: {
      name: "Illinois",
      color: "#f7971d",
      description: "<h4>Valerie Kean</h4>\n<a href=\"tel:+309-231-7470\">309-231-7470</a>\n<a href=\"mailto:valerie@paesauthor.com\">valerie@paesauthor.com</a>",
      zoomable: "no"
    },
    CT: {
      name: "Connecticut",
      color: "#006699",
      description: "<h4>Leigh Dennick</h4>\n<a href=\"tel:+412-260-3384\">412-260-3384</a>\n<a href=\"mailto:leigh@paesauthor.com\">leigh@paesauthor.com</a>",
      zoomable: "no"
    },
    WI: {
      name: "Wisconsin",
      color: "#ab6d21",
      description: "<h4>Heidi Johnson</h4>\n<a href=\"tel:+763-286-0476\">763-286-0476</a>\n<a href=\"mailto:heidi@paesauthor.com\">heidi@paesauthor.com</a>",
      zoomable: "no"
    },
    NC: {
      name: "North Carolina",
      color: "#b9e5fb",
      description: "<h4>CJ Hirschman</h4>\n<a href=\"tel:+843-732-1653\">843-732-1653</a>\n<a href=\"mailto:cj@paesauthor.com\">cj@paesauthor.com</a>",
      zoomable: "no"
    },
    DC: {
      name: "District of Columbia",
      color: "#ab93fd",
      description: "<h4>Savannah Stapley</h4>\n<a href=\"tel:+480-202-4460\">480-202-4460</a>\n<a href=\"mailto:savannah@paesauthor.com\">savannah@paesauthor.com</a>",
      zoomable: "no"
    },
    MA: {
      name: "Massachusetts",
      color: "#ab93fd",
      description: "<h4>Savannah Stapley</h4>\n<a href=\"tel:+480-202-4460\">480-202-4460</a>\n<a href=\"mailto:savannah@paesauthor.com\">savannah@paesauthor.com</a>",
      zoomable: "no"
    },
    TN: {
      name: "Tennessee",
      color: "#b9e5fb",
      description: "<h4>CJ Hirschman</h4>\n<a href=\"tel:+843-732-1653\">843-732-1653</a>\n<a href=\"mailto:cj@paesauthor.com\">cj@paesauthor.com</a>",
      zoomable: "no"
    },
    AR: {
      name: "Arkansas",
      color: "#861c80",
      description: "<h4>Tanner Amaral</h4>\n<a href=\"tel:+805-904-3656\">805-904-3656</a>\n<a href=\"mailto:tanner@paesauthor.com\">tanner@paesauthor.com</a>",
      zoomable: "no"
    },
    MO: {
      name: "Missouri",
      color: "#861c80",
      description: "<h4>Tanner Amaral</h4>\n<a href=\"tel:+805-904-3656\">805-904-3656</a>\n<a href=\"mailto:tanner@paesauthor.com\">tanner@paesauthor.com</a>",
      zoomable: "no"
    },
    GA: {
      name: "Georgia",
      color: "#3399cc",
      description: "<h4>Megan Donovan</h4>\n<a href=\"tel:+904-838-1573\">904-838-1573</a>\n<a href=\"mailto:megan@paesauthor.com\">megan@paesauthor.com</a>",
      zoomable: "no"
    },
    SC: {
      name: "South Carolina",
      color: "#b9e5fb",
      description: "<h4>CJ Hirschman</h4>\n<a href=\"tel:+843-732-1653\">843-732-1653</a>\n<a href=\"mailto:cj@paesauthor.com\">cj@paesauthor.com</a>",
      zoomable: "no"
    },
    KY: {
      name: "Kentucky",
      color: "#99cc33",
      description: "<h4>Rachel Bricker</h4>\n<a href=\"tel:+814-449-9300\">814-449-9300</a>\n<a href=\"mailto:rachel@paesauthor.com\">rachel@paesauthor.com</a>\n\n<h4>Kathi George</h4>\n<a href=\"tel:+814-323-0852\">814-323-0852</a>\n<a href=\"mailto:kathi@paesauthor.com\">kathi@paesauthor.com</a>",
      zoomable: "no"
    },
    AL: {
      name: "Alabama",
      color: "#d7cdf8",
      description: "<h4>Lacey Reeves</h4>\n<a href=\"tel:+843-597-6460\">843-597-6460</a>\n<a href=\"mailto:lacey@paesauthor.com\">lacey@paesauthor.com</a>",
      zoomable: "no"
    },
    LA: {
      name: "Louisiana",
      color: "#d7cdf8",
      description: "<h4>Lacey Reeves</h4>\n<a href=\"tel:+843-597-6460\">843-597-6460</a>\n<a href=\"mailto:lacey@paesauthor.com\">lacey@paesauthor.com</a>",
      zoomable: "no"
    },
    MS: {
      name: "Mississippi",
      color: "#d7cdf8",
      description: "<h4>Lacey Reeves</h4>\n<a href=\"tel:+843-597-6460\">843-597-6460</a>\n<a href=\"mailto:lacey@paesauthor.com\">lacey@paesauthor.com</a>",
      zoomable: "no"
    },
    IA: {
      name: "Iowa",
      color: "#ab6d21",
      description: "<h4>Heidi Johnson</h4>\n<a href=\"tel:+763-286-0476\">763-286-0476</a>\n<a href=\"mailto:heidi@paesauthor.com\">heidi@paesauthor.com</a>",
      zoomable: "no"
    },
    MN: {
      name: "Minnesota",
      color: "#ab6d21",
      description: "<h4>Heidi Johnson</h4>\n<a href=\"tel:+763-286-0476\">763-286-0476</a>\n<a href=\"mailto:heidi@paesauthor.com\">heidi@paesauthor.com</a>",
      zoomable: "no"
    },
    OK: {
      name: "Oklahoma",
      color: "#861c80",
      description: "<h4>Tanner Amaral</h4>\n<a href=\"tel:+805-904-3656\">805-904-3656</a>\n<a href=\"mailto:tanner@paesauthor.com\">tanner@paesauthor.com</a>",
      zoomable: "no"
    },
    TX: {
      name: "Texas",
      color: "#f8d1b1",
      description: "<h4>Leslie Polvado</h4>\n<a href=\"tel:+512-529-0723\">512-529-0723</a>\n<a href=\"mailto:leslie@paesauthor.com\">leslie@paesauthor.com</a>",
      zoomable: "no"
    },
    NM: {
      name: "New Mexico",
      description: "<a href=\"tel:+805-286-7513\">805-286-7513</a>\n<a href=\"mailto:sales@paesauthor.com\">sales@paesauthor.com</a>",
      zoomable: "no"
    },
    KS: {
      name: "Kansas",
      color: "#861c80",
      description: "<h4>Tanner Amaral</h4>\n<a href=\"tel:+805-904-3656\">805-904-3656</a>\n<a href=\"mailto:tanner@paesauthor.com\">tanner@paesauthor.com</a>",
      zoomable: "no"
    },
    NE: {
      name: "Nebraska",
      color: "#ab6d21",
      description: "<h4>Heidi Johnson</h4>\n<a href=\"tel:+763-286-0476\">763-286-0476</a>\n<a href=\"mailto:heidi@paesauthor.com\">heidi@paesauthor.com</a>",
      zoomable: "no"
    },
    SD: {
      name: "South Dakota",
      color: "#ab6d21",
      description: "<h4>Heidi Johnson</h4>\n<a href=\"tel:+763-286-0476\">763-286-0476</a>\n<a href=\"mailto:heidi@paesauthor.com\">heidi@paesauthor.com</a>",
      zoomable: "no"
    },
    ND: {
      name: "North Dakota",
      color: "#ab6d21",
      description: "<h4>Heidi Johnson</h4>\n<a href=\"tel:+763-286-0476\">763-286-0476</a>\n<a href=\"mailto:heidi@paesauthor.com\">heidi@paesauthor.com</a>",
      zoomable: "no"
    },
    WY: {
      name: "Wyoming",
      color: "#e8a598",
      description: "<h4>Christine Manning</h4>\n<a href=\"tel:+801-548-3091\">801-548-3091</a>\n<a href=\"mailto:mtnwest@paesauthor.com\">mtnwest@paesauthor.com</a>\n\n<h4>Damon Martin</h4>\n<a href=\"tel:+510-299-7505\">510-299-7505</a>\n<a href=\"mailto:mtnwest@paesauthor.com\">mtnwest@paesauthor.com</a>",
      zoomable: "no"
    },
    MT: {
      name: "Montana",
      description: "<a href=\"tel:+805-286-7513\">805-286-7513</a>\n<a href=\"mailto:sales@paesauthor.com\">sales@paesauthor.com</a>",
      zoomable: "no"
    },
    CO: {
      name: "Colorado",
      description: "<a href=\"tel:+805-286-7513\">805-286-7513</a>\n<a href=\"mailto:sales@paesauthor.com\">sales@paesauthor.com</a>",
      zoomable: "no"
    },
    UT: {
      name: "Utah",
      color: "#e8a598",
      description: "<h4>Christine Manning</h4>\n<a href=\"tel:+801-548-3091\">801-548-3091</a>\n<a href=\"mailto:mtnwest@paesauthor.com\">mtnwest@paesauthor.com</a>\n\n<h4>Damon Martin</h4>\n<a href=\"tel:+510-299-7505\">510-299-7505</a>\n<a href=\"mailto:mtnwest@paesauthor.com\">mtnwest@paesauthor.com</a>",
      zoomable: "no"
    },
    AZ: {
      name: "Arizona",
      color: "#ab6d21",
      description: "<h4>Heidi Johnson</h4>\n<a href=\"tel:+763-286-0476\">763-286-0476</a>\n<a href=\"mailto:heidi@paesauthor.com\">heidi@paesauthor.com</a>",
      zoomable: "no"
    },
    NV: {
      name: "Nevada",
      description: "<a href=\"tel:+805-286-7513\">805-286-7513</a>\n<a href=\"mailto:sales@paesauthor.com\">sales@paesauthor.com</a>",
      zoomable: "no"
    },
    OR: {
      name: "Oregon",
      description: "<a href=\"tel:+805-286-7513\">805-286-7513</a>\n<a href=\"mailto:sales@paesauthor.com\">sales@paesauthor.com</a>",
      zoomable: "no"
    },
    WA: {
      name: "Washington",
      description: "<a href=\"tel:+805-286-7513\">805-286-7513</a>\n<a href=\"mailto:sales@paesauthor.com\">sales@paesauthor.com</a>",
      zoomable: "no"
    },
    CA: {
      name: "California",
      color: "#3399cc",
      description: "<h4>Rebekkah Swisher</h4>\n<a href=\"tel:+310-418-1769\">310-418-1769</a>\n<a href=\"mailto:rebekkah@paesauthor.com\">rebekkah@paesauthor.com</a>",
      zoomable: "no"
    },
    MI: {
      name: "Michigan",
      color: "#ccee66",
      description: "<h4>Jamie Coker</h4>\n<a href=\"tel:+734-646-9390\">734-646-9390</a>\n<a href=\"mailto:jamie@paesauthor.com\">jamie@paesauthor.com</a>",
      zoomable: "no"
    },
    ID: {
      name: "Idaho",
      description: "<a href=\"tel:+805-286-7513\">805-286-7513</a>\n<a href=\"mailto:sales@paesauthor.com\">sales@paesauthor.com</a>",
      zoomable: "no"
    },
    GU: {
      name: "Guam",
      hide: "yes",
      zoomable: "no"
    },
    VI: {
      name: "Virgin Islands",
      hide: "yes",
      zoomable: "no"
    },
    PR: {
      name: "Puerto Rico",
      hide: "yes",
      zoomable: "no"
    },
    MP: {
      name: "Saipan",
      hide: "no",
      description: "<h4>Heidi Johnson</h4>\n<a href=\"tel:+763-286-0476\">763-286-0476</a>\n<a href=\"mailto:heidi@paesauthor.com\">heidi@paesauthor.com</a>",
      color: "#ab6d21",
      zoomable: "no"
    },
    AS: {
      name: "American Samoa",
      hide: "yes",
      zoomable: "no"
    }
  },
  locations: {},
  labels: {
    NH: {
      parent_id: "NH",
      x: "932",
      y: "183",
      width: 45,
      pill: "yes",
      display: "all"
    },
    VT: {
      parent_id: "VT",
      x: "883",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    RI: {
      parent_id: "RI",
      x: "932",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all",
      color: "#fff"
    },
    NJ: {
      parent_id: "NJ",
      x: "883",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all",
      color: "#fff"
    },
    DE: {
      parent_id: "DE",
      x: "883",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all",
      color: "#fff"
    },
    MD: {
      parent_id: "MD",
      x: "932",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all",
      color: "#fff"
    },
    DC: {
      parent_id: "DC",
      x: "884",
      y: "332",
      pill: "yes",
      width: 45,
      display: "all",
      color: "#fff"
    },
    MA: {
      parent_id: "MA",
      x: "932",
      y: "213",
      pill: "yes",
      width: 45,
      display: "all",
      color: "#fff"
    },
    CT: {
      parent_id: "CT",
      x: "932",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all",
      color: "#fff"
    },
    HI: {
      parent_id: "HI",
      x: 305,
      y: 565,
      pill: "yes",
      color: "#fff",
      display: "all"
    },
    AK: {
      parent_id: "AK",
      x: "113",
      y: "495"
    },
    FL: {
      parent_id: "FL",
      x: "773",
      y: "510",
      color: "#fff"
    },
    ME: {
      parent_id: "ME",
      x: "893",
      y: "85"
    },
    NY: {
      parent_id: "NY",
      x: "815",
      y: "158"
    },
    PA: {
      parent_id: "PA",
      x: "786",
      y: "210",
      color: "#fff"
    },
    VA: {
      parent_id: "VA",
      x: "790",
      y: "282",
      color: "#fff"
    },
    WV: {
      parent_id: "WV",
      x: "744",
      y: "270",
      color: "#fff"
    },
    OH: {
      parent_id: "OH",
      x: "700",
      y: "240",
      color: "#fff"
    },
    IN: {
      parent_id: "IN",
      x: "650",
      y: "250",
      color: "#fff"
    },
    IL: {
      parent_id: "IL",
      x: "600",
      y: "250",
      color: "#fff"
    },
    WI: {
      parent_id: "WI",
      x: "575",
      y: "155",
      color: "#fff"
    },
    NC: {
      parent_id: "NC",
      x: "784",
      y: "326",
      color: "#fff"
    },
    TN: {
      parent_id: "TN",
      x: "655",
      y: "340",
      color: "#fff"
    },
    AR: {
      parent_id: "AR",
      x: "548",
      y: "368",
      color: "#fff"
    },
    MO: {
      parent_id: "MO",
      x: "548",
      y: "293",
      color: "#fff"
    },
    GA: {
      parent_id: "GA",
      x: "718",
      y: "405",
      color: "#fff"
    },
    SC: {
      parent_id: "SC",
      x: "760",
      y: "371",
      color: "#fff"
    },
    KY: {
      parent_id: "KY",
      x: "680",
      y: "300",
      color: "#fff"
    },
    AL: {
      parent_id: "AL",
      x: "655",
      y: "405",
      color: "#fff"
    },
    LA: {
      parent_id: "LA",
      x: "550",
      y: "435",
      color: "#fff"
    },
    MS: {
      parent_id: "MS",
      x: "600",
      y: "405",
      color: "#fff"
    },
    IA: {
      parent_id: "IA",
      x: "525",
      y: "210",
      color: "#fff"
    },
    MN: {
      parent_id: "MN",
      x: "506",
      y: "124",
      color: "#fff"
    },
    OK: {
      parent_id: "OK",
      x: "460",
      y: "360",
      color: "#fff"
    },
    TX: {
      parent_id: "TX",
      x: "425",
      y: "435",
      color: "#fff"
    },
    NM: {
      parent_id: "NM",
      x: "305",
      y: "365"
    },
    KS: {
      parent_id: "KS",
      x: "445",
      y: "290",
      color: "#fff"
    },
    NE: {
      parent_id: "NE",
      x: "420",
      y: "225",
      color: "#fff"
    },
    SD: {
      parent_id: "SD",
      x: "413",
      y: "160",
      color: "#fff"
    },
    ND: {
      parent_id: "ND",
      x: "416",
      y: "96",
      color: "#fff"
    },
    WY: {
      parent_id: "WY",
      x: "300",
      y: "180",
      color: "#fff"
    },
    MT: {
      parent_id: "MT",
      x: "280",
      y: "95"
    },
    CO: {
      parent_id: "CO",
      x: "320",
      y: "275"
    },
    UT: {
      parent_id: "UT",
      x: "223",
      y: "260",
      color: "#fff"
    },
    AZ: {
      parent_id: "AZ",
      x: "205",
      y: "360",
      color: "#fff"
    },
    NV: {
      parent_id: "NV",
      x: "140",
      y: "235"
    },
    OR: {
      parent_id: "OR",
      x: "100",
      y: "120"
    },
    WA: {
      parent_id: "WA",
      x: "130",
      y: "55"
    },
    ID: {
      parent_id: "ID",
      x: "200",
      y: "150"
    },
    CA: {
      parent_id: "CA",
      x: "79",
      y: "285"
    },
    MI: {
      parent_id: "MI",
      x: "663",
      y: "185",
      color: "#fff"
    },
    PR: {
      parent_id: "PR",
      x: "620",
      y: "545"
    },
    GU: {
      parent_id: "GU",
      x: "550",
      y: "540"
    },
    VI: {
      parent_id: "VI",
      x: "680",
      y: "519"
    },
    MP: {
      parent_id: "MP",
      x: "570",
      y: "575",
      pill: "yes",
      display: "all",
      color: "#fff"
    },
    AS: {
      parent_id: "AS",
      x: "665",
      y: "580"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};