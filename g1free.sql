-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/

-- Версия сервера: 5.7.35
-- Версия PHP: 7.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- --------------------------------------------------------

--
-- Структура таблицы `rvc_categories`
--

CREATE TABLE `rvc_categories` (
  `id` int(9) UNSIGNED ZEROFILL NOT NULL,
  `created` timestamp NOT NULL DEFAULT '1980-05-24 21:00:00',
  `changed` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` enum('undefined','success','suspended','error') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'undefined',
  `status-comment` varchar(96) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `title` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user-id` int(9) UNSIGNED ZEROFILL NOT NULL DEFAULT '000000000',
  `json` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `rvc_categories`
--

INSERT INTO `rvc_categories` (`id`, `created`, `changed`, `status`, `status-comment`, `title`, `user-id`, `json`) VALUES
(000000001, '2020-02-19 07:40:53', '2021-07-19 10:19:34', 'success', '', 'Loowe', 000000003, '{\"twitter\":\"https:\\/\\/twitter.com\\/Loowe\"}');

-- --------------------------------------------------------

--
-- Структура таблицы `rvc_goods`
--

CREATE TABLE `rvc_goods` (
  `id` int(9) UNSIGNED ZEROFILL NOT NULL,
  `created` timestamp NOT NULL DEFAULT '1980-05-24 21:00:00',
  `changed` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` enum('undefined','success','suspended','removed','error') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'undefined',
  `status-comment` varchar(96) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `site-id` int(9) UNSIGNED ZEROFILL NOT NULL DEFAULT '000000000',
  `brand` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `item` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category-id` int(9) UNSIGNED ZEROFILL NOT NULL DEFAULT '000000000',
  `sku` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL,
  `asin` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stock` smallint(5) NOT NULL,
  `on-off` tinyint(1) NOT NULL,
  `json` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `rvc_goods`
--

INSERT INTO `rvc_goods` (`id`, `created`, `changed`, `status`, `status-comment`, `site-id`, `brand`, `item`, `category-id`, `sku`, `asin`, `stock`, `on-off`, `json`) VALUES
(000000001, '2020-03-19 06:23:17', '2021-03-04 20:50:19', 'success', '', 000000056, 'AENO ACNE TREATMENT', 'Cystic Acne Treatment Balm 1oz', 000000007, 'RF-AALN-OE6I', 'B07TDQGKJC', 17, 0, '{\"oldskus\":[\"RF-AALN-OE6I\",\"RD-66DA-5L7L\"]}');

-- --------------------------------------------------------

--
-- Структура таблицы `rvc_old-sku`
--

CREATE TABLE `rvc_old-sku` (
  `current` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `old` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `rvc_old-sku`
--

INSERT INTO `rvc_old-sku` (`current`, `old`) VALUES
('23-LYPA-V8CP', 'ZT-HN0M-Y562');

-- --------------------------------------------------------

--
-- Структура таблицы `rvc_other-domains`
--

CREATE TABLE `rvc_other-domains` (
  `domain` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `site-id` int(9) UNSIGNED ZEROFILL NOT NULL,
  `from` enum('postcard','sticker','get1free') COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `rvc_other-domains`
--

INSERT INTO `rvc_other-domains` (`domain`, `site-id`, `from`) VALUES
('veet-gif.com', 000000001, 'postcard'),
('finevs-sp.com', 000000001, 'sticker');

-- --------------------------------------------------------

--
-- Структура таблицы `rvc_sites`
--

CREATE TABLE `rvc_sites` (
  `id` int(9) UNSIGNED ZEROFILL NOT NULL,
  `created` timestamp NOT NULL DEFAULT '1980-05-24 21:00:00',
  `changed` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` enum('undefined','success','suspended','error') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'undefined',
  `status-comment` varchar(96) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `domain` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `brand` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mail` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL,
  `json` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `rvc_sites`
--

INSERT INTO `rvc_sites` (`id`, `created`, `changed`, `status`, `status-comment`, `domain`, `brand`, `username`, `mail`, `password`, `json`) VALUES
(000000001, '2020-02-19 14:53:47', '2021-07-19 10:19:34', 'success', '', 'els-cream.com', 'ELLIEVE ORGANICS', 'Ellieve Organics', 'mail@els-cream.com', '123456789', '');

-- --------------------------------------------------------

--
-- Структура таблицы `rvc_users`
--

CREATE TABLE `rvc_users` (
  `id` int(9) UNSIGNED ZEROFILL NOT NULL,
  `created` timestamp NOT NULL DEFAULT '1980-05-24 21:00:00',
  `changed` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` enum('undefined','success','suspended','error') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'undefined',
  `status-comment` varchar(96) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `name` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sheet-google-id` char(44) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `json` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `rvc_users`
--

INSERT INTO `rvc_users` (`id`, `created`, `changed`, `status`, `status-comment`, `name`, `sheet-google-id`, `json`) VALUES
(000000001, '2020-02-18 21:12:35', '2021-07-19 10:19:33', 'success', '', 'Вика', '1VZGfsy2bhKNvPKkXp8GjovZ-dmDalB-UrHT-xe1VrOc', '');

-- --------------------------------------------------------

--
-- Структура таблицы `site_shipped-orders`
--

CREATE TABLE `site_shipped-orders` (
  `id` int(9) UNSIGNED ZEROFILL NOT NULL,
  `created` timestamp NOT NULL DEFAULT '1980-05-24 21:00:00',
  `changed` timestamp NOT NULL DEFAULT '1980-05-24 21:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `host` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `refer` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `num` char(19) COLLATE utf8mb4_unicode_ci NOT NULL,
  `scheme` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `status` enum('new','in-table','not-need') COLLATE utf8mb4_unicode_ci NOT NULL,
  `users` enum('new','in-table','not-need') COLLATE utf8mb4_unicode_ci NOT NULL,
  `sendings` enum('new','in-table','not-need') COLLATE utf8mb4_unicode_ci NOT NULL,
  `flags` set('olga') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `sku` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `off-status` enum('undefined','on','off') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'undefined',
  `stars` smallint(1) UNSIGNED NOT NULL,
  `email` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gift-card` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `screen` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `site_shipped-orders`
--

INSERT INTO `site_shipped-orders` (`id`, `created`, `changed`, `host`, `refer`, `num`, `scheme`, `status`, `users`, `sendings`, `flags`, `sku`, `off-status`, `stars`, `email`, `gift-card`, `address`, `screen`) VALUES
(000000007, '2019-10-23 02:35:24', '2020-02-29 11:54:47', 'rev-beautys.com', '', '924-6260831-9076258', '', 'in-table', 'in-table', 'not-need', '', '23-AWTT-XJO5', 'undefined', 3, 'taylor.nor@cloud.com', NULL, NULL, NULL);


--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `rvc_categories`
--
ALTER TABLE `rvc_categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `title` (`title`),
  ADD KEY `status` (`status`);

--
-- Индексы таблицы `rvc_goods`
--
ALTER TABLE `rvc_goods`
  ADD PRIMARY KEY (`id`),
  ADD KEY `status` (`status`);

--
-- Индексы таблицы `rvc_old-sku`
--
ALTER TABLE `rvc_old-sku`
  ADD UNIQUE KEY `old` (`old`),
  ADD KEY `current` (`current`);

--
-- Индексы таблицы `rvc_other-domains`
--
ALTER TABLE `rvc_other-domains`
  ADD UNIQUE KEY `domain + site-id` (`domain`,`site-id`) USING BTREE,
  ADD KEY `site-id + from` (`site-id`,`from`);

--
-- Индексы таблицы `rvc_sites`
--
ALTER TABLE `rvc_sites`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `domain` (`domain`),
  ADD KEY `status` (`status`);

--
-- Индексы таблицы `rvc_users`
--
ALTER TABLE `rvc_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `status` (`status`);

--
-- Индексы таблицы `site_shipped-orders`
--
ALTER TABLE `site_shipped-orders`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `num + sku` (`num`,`sku`) USING BTREE,
  ADD KEY `changed` (`changed`),
  ADD KEY `created` (`created`),
  ADD KEY `status` (`status`),
  ADD KEY `users` (`users`),
  ADD KEY `sendings` (`sendings`),
  ADD KEY `host + email` (`host`,`email`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `rvc_categories`
--
ALTER TABLE `rvc_categories`
  MODIFY `id` int(9) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `rvc_goods`
--
ALTER TABLE `rvc_goods`
  MODIFY `id` int(9) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=481;

--
-- AUTO_INCREMENT для таблицы `rvc_sites`
--
ALTER TABLE `rvc_sites`
  MODIFY `id` int(9) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=166;

--
-- AUTO_INCREMENT для таблицы `rvc_users`
--
ALTER TABLE `rvc_users`
  MODIFY `id` int(9) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `site_shipped-orders`
--
ALTER TABLE `site_shipped-orders`
  MODIFY `id` int(9) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=225530;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
