-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 09, 2020 at 02:31 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crudnode`
--

-- --------------------------------------------------------

--
-- Table structure for table `customerinfo`
--

CREATE TABLE `customerinfo` (
  `id` int(11) NOT NULL,
  `email` varchar(200) NOT NULL,
  `cName` varchar(200) NOT NULL,
  `cMobile` varchar(10) NOT NULL,
  `cPassword` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customerinfo`
--

INSERT INTO `customerinfo` (`id`, `email`, `cName`, `cMobile`, `cPassword`) VALUES
(1, 'ash@gmail.com', 'ash', '9512276063', 'ash@123'),
(2, 'rom@gmail.com', 'romil', '9898989898', 'rom@123'),
(3, 'gita@gmail.com', 'gita', '9888898889', 'gita@123'),
(4, 'yogi@gmail.com', 'yogita', '9999999999', '$2b$10$38YX.3kwOiCHC189BWo.eO7GrVEH3mhXEov5BRSwO2I97qHmjUGxq'),
(5, 'ashu@gmail.com', 'ashu', '9512276063', '$2b$10$ktjoIty39NskHlfBgvCRYO46pK4bAYXBFk8EYjesjSySLOxcp82Wm');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `pName` varchar(100) NOT NULL,
  `pDesc` varchar(11) NOT NULL,
  `pPrice` int(11) NOT NULL,
  `pQty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `pName`, `pDesc`, `pPrice`, `pQty`) VALUES
(2, 'orange', 'good', 40, 200),
(3, 'tshirt', 'good', 100, 100),
(4, 'bgnbmghm', 'hkhjk,jk', 23, 56);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customerinfo`
--
ALTER TABLE `customerinfo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customerinfo`
--
ALTER TABLE `customerinfo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
