<?php

if (preg_match('#^/public/#', $_SERVER["REQUEST_URI"])) {
    return false;
}

echo file_get_contents(__DIR__ . '/public/index.html');

