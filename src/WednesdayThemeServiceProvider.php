<?php

declare(strict_types=1);

namespace Murtaza1904\WednesdayTheme;

use Illuminate\Support\ServiceProvider;

final class WednesdayThemeServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $this->publishes([
            __DIR__ . '/../resources/css' => resource_path('css'),
            __DIR__ . '/../resources/js'  => resource_path('js'),
        ], 'wednesday-theme-assets');
    }

    public function register(): void
    {
        $this->app->singleton(ThemeManager::class, fn () => new ThemeManager('wednesday'));
    }
}
