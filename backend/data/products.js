const products = [
  {
    name: 'ASUS TUF GAMING X570-PLUS',
    image: '/images/asus-x570.jpg',
    description:
      'ASUS TUF GAMING X570-PLUS (Wi-Fi) AMD AM4 X570 ATX gaming motherboard with PCIe 4.0, dual M.2, Wi-Fi, 14 Dr. MOS power stages, HDMI, DP, SATA 6Gb/s, USB 3.2 Gen 2 and Aura Sync RGB lighting',
    brand: 'ASUS',
    category: 'Motherboard',
    price: 259.99,
    countInStock: 30,
    rating: 5,
    numReviews: 19,
  },
  {
    name: 'EVGA SuperNOVA 650',
    image: '/images/EVGA-psu.jpg',
    description:
      'A single +12V rail offers the best power output, rail stability and compatibility with the latest hardware. EVGA 650 GQ can provide up to 54A on the +12V rail!',
    brand: 'EVGA',
    category: 'PSU',
    price: 92.39,
    countInStock: 18,
    rating: 5,
    numReviews: 9,
  },
  {
    name: 'Intel Core i7-10700K Processor',
    image: '/images/intel-i9.jpg',
    description:
      'Intel Core i7-10700K 8-Core 16-Thread Desktop Processor Unlocked - Socket LGA 1200 (400 Series) , 3.8 GHz Base 5.1 GHz Turbo - 125W 10th Gen Retail Boxed (BX8070110700K)',
    brand: 'Intel',
    category: 'CPU',
    price: 560.0,
    countInStock: 6,
    rating: 4.3,
    numReviews: 26,
  },
  {
    name: 'Gigabyte B450M DS3H',
    image: '/images/B450M.jpg',
    description:
      'Supports AMD 2nd Generation Ryzen/ Ryzen with Radeon Vega Graphics/ 1st Generation Ryzen Processors Dual Channel Non ECC Unbuffered DDR4, 4 DIMMs HDMI, DVI D Ports for Multiple Display Ultra-Fast PCIe Gen3 x4 M.2 with PCIe NVMe and SATA mode support',
    brand: 'GIGABYTE',
    category: 'Motherboard',
    price: 79.99,
    countInStock: 110,
    rating: 4.8,
    numReviews: 30,
  },
  {
    name: 'AMD Ryzen 9 3900X',
    image: '/images/ryzen3900x.jpg',
    description:
      'AMD Ryzen 9 3900X 12-Core/24-Thread 7nm Processor - Socket AM4 3.8GHz/ 4.6 GHz Boost, RGB Wraith Prism Cooler, 105W (100-100000023BOX)',
    brand: 'AMD',
    category: 'CPU',
    price: 599.99,
    countInStock: 997,
    rating: 4.7,
    numReviews: 10,
  },
  {
    name: 'EVGA GeForce GTX 1660 Ti XC Black GAMING 6GB',
    image: '/images/1660ti.jpg',
    description:
      'EVGA GeForce GTX 1660 Ti XC Black GAMING 6GB GDDR6 -1770 MHz Clock, 12000 MHz Memory - PCIe 3.0, HDMI 2.0b, DP1.4, Dual-Link DVI - 06G-P4-1261-KR',
    brand: 'EVGA',
    category: 'GPU',
    price: 409.99,
    countInStock: 779,
    rating: 4.9,
    numReviews: 100,
  },
  {
    name:
      'ASUS ROG STRIX GeForce RTX 2080 Ti Overclocked O11G Triple Fan GDDR6',
    image: '/images/2080ti.jpg',
    description:
      'ASUS ROG STRIX GeForce RTX 2080 Ti Overclocked O11G Triple Fan GDDR6 -1350 MHz Base/ 1665 MHz Boost, 14000 MHz Memory - PCI-E 3.0, 2x HDMI 2.0b, 2x DP1.4, USB Type-C - ROG-STRIX-RTX2080TI-O11G-GAMING',
    brand: 'ASUS',
    category: 'GPU',
    price: 1799.99,
    countInStock: 3,
    rating: 1,
    numReviews: 4,
  },
  {
    name: 'ASROCK CHALLENGER D Radeon RX 5600 XT',
    image: '/images/rx5600.jpg',
    description:
      'ASROCK CHALLENGER D Radeon RX 5600 XT, 1750 MHz Boost Clock, 6GB OC 192-Bit GDDR6 PCI Express 4.0 x16 DirectX 12 AMD Video Card, RX5600XT CLD 6GO',
    brand: 'ASROCK',
    category: 'GPU',
    price: 389.99,
    countInStock: 10,
    rating: 2,
    numReviews: 4,
  },
  {
    name: 'MSI GF63 Thin Gaming Notebook',
    image: '/images/gf63.jpg',
    description:
      'MSI GF63 Thin Gaming Notebook - 15.6" FHD IPS Intel Core i7-10750H - GTX1650, 16GB DDR4, 512GB SSD - Win10, GF63 10SCXR-086CA',
    brand: 'MSI',
    category: 'Laptop',
    price: 1929.99,
    countInStock: 0,
    rating: 3.5,
    numReviews: 6,
  },
  {
    name: 'ACER Nitro 5 Gaming Notebook',
    image: '/images/nitro5.jpg',
    description:
      "ACER Nitro 5 Gaming Notebook - 15.6'' FHD 144Hz, Intel Core i7-9750H - RTX 2060, 16GB DDR4, 512GB SSD - Windows 10, AN515-54-70KK (NH.Q96AA.001)",
    brand: 'ACER',
    category: 'Laptop',
    price: 1399.99,
    countInStock: 10,
    rating: 1.3,
    numReviews: 9,
  },
  {
    name: 'ASUS ROG Zephyrus Gaming Notebook',
    image: '/images/zephyrus.jpg',
    description:
      'ASUS ROG Zephyrus Gaming Notebook - 15.6" FHD 144Hz AMD Ryzen 7 4800HS - GTX 1660Ti, 16GB DDR4, 512GB SSD - Windows 10 Pro, GA502IU-XS74',
    brand: 'ASUS',
    category: 'Laptop',
    price: 1549.99,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Acer 24in IPS EK240Y Abi 1920x1080 4ms VGA HDMI Tilt 75x75mm',
    image: '/images/ek240.jpg',
    description:
      'The Acer monitor will augment your PC setup with a screen with a 23.8" display size. The aspect ratio is 16:9. The monitor is equipped with the IPS technology, boasting exquisite colour rendering and great viewing angles. The monitor has a 1920 × 1080px resolution.',
    brand: 'ACER',
    category: 'Monitor',
    price: 129.99,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
]

export default products
