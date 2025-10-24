<?php

declare(strict_types=1);

namespace Murtaza1904\WednesdayTheme;

final class ThemeManager
{
    public function __construct(
        public string $name
    ) {}

    public function name(): string
    {
        return ucfirst($this->name) . ' Theme';
    }

    public function assets(): array
    {
        return [
            'css' => asset('vendor/murtaza1904/wednesday-theme/resources/assets/css/wednesday-theme.css'),
            'js'  => asset('vendor/murtaza1904/wednesday-theme/resources/js/index.js'),
        ];
    }
}
